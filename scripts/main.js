/**
 * THE MASCULINE OPERATING SYSTEM
 * Main Application
 */

import { SYSTEM_PROMPT } from './engine.js';

// DOM Elements
let consultationForm;
let situationInput;
let submitButton;
let responseContainer;

// Gemini Configuration
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Initialize application
function init() {
    consultationForm = document.getElementById('consultation-form');
    situationInput = document.getElementById('situation-input');
    submitButton = document.getElementById('submit-button');
    responseContainer = document.getElementById('response');

    // Event listeners
    consultationForm.addEventListener('submit', handleConsultation);
    situationInput.addEventListener('input', handleInputChange);

    // Check for API key
    checkApiKey();
}

// Check if API key is configured
function checkApiKey() {
    const apiKey = getApiKey();
    if (!apiKey) {
        showApiKeyPrompt();
    }
}

// Get API key from localStorage
function getApiKey() {
    return localStorage.getItem('mos_gemini_key');
}

// Show API key prompt
function showApiKeyPrompt() {
    responseContainer.innerHTML = `
    <div class="api-key-setup">
      <div class="protocol__header">Configuration Required</div>
      <div class="protocol__rule">The model requires access. Input key.</div>
      <input 
        type="password" 
        id="api-key-input" 
        class="api-key-setup__input" 
        placeholder="Enter Gemini API key"
      />
      <div>
        <button id="save-api-key" class="api-key-setup__button">Configure</button>
      </div>
      <p class="api-key-setup__note">Stored locally. Transmitted to Gemini only.</p>
    </div>
  `;
    responseContainer.classList.add('response--active');

    document.getElementById('save-api-key').addEventListener('click', saveApiKey);
    document.getElementById('api-key-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') saveApiKey();
    });
}

// Save API key
function saveApiKey() {
    const input = document.getElementById('api-key-input');
    const key = input.value.trim();
    if (key) {
        localStorage.setItem('mos_gemini_key', key);
        responseContainer.classList.remove('response--active');
        responseContainer.innerHTML = '';
    }
}

// Handle input changes
function handleInputChange() {
    submitButton.disabled = !situationInput.value.trim();
}

// Handle consultation submission
async function handleConsultation(event) {
    event.preventDefault();

    const situation = situationInput.value.trim();
    if (!situation) return;

    const stageSelect = document.getElementById('stage-select');
    const selectedStage = stageSelect ? stageSelect.value : 'unknown';

    const apiKey = getApiKey();
    if (!apiKey) {
        showApiKeyPrompt();
        return;
    }

    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'CONSULTING...';

    try {
        const response = await consultModel(situation, selectedStage, apiKey);
        displayResponse(response);
    } catch (error) {
        displayError(error);
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'CONSULT THE MODEL';
    }
}

// Consult the model via Gemini API
async function consultModel(situation, stage, apiKey) {
    const contextMessage = stage !== 'unknown'
        ? `User Life Stage Context: ${stage}\n\nSituation: ${situation}`
        : `Situation: ${situation}`;

    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            system_instruction: {
                parts: [{ text: SYSTEM_PROMPT }]
            },
            contents: [{
                parts: [{ text: contextMessage }]
            }],
            generationConfig: {
                temperature: 0.3,
                topP: 0.8,
                maxOutputTokens: 1024,
            }
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Consultation failed');
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response.';
}

// Parse the structured response
function parseResponse(text) {
    const sections = {
        principle: '',
        mentalModel: '',
        failurePattern: '',
        standard: '',
        action: ''
    };

    // Extract each section
    const principleMatch = text.match(/\*\*PRINCIPLE\*\*\s*([\s\S]*?)(?=\*\*MENTAL MODEL\*\*|$)/i);
    const modelMatch = text.match(/\*\*MENTAL MODEL\*\*\s*([\s\S]*?)(?=\*\*FAILURE PATTERN\*\*|$)/i);
    const failureMatch = text.match(/\*\*FAILURE PATTERN\*\*\s*([\s\S]*?)(?=\*\*STANDARD\*\*|$)/i);
    const standardMatch = text.match(/\*\*STANDARD\*\*\s*([\s\S]*?)(?=\*\*ACTION\*\*|$)/i);
    const actionMatch = text.match(/\*\*ACTION\*\*\s*([\s\S]*?)$/i);

    if (principleMatch) sections.principle = principleMatch[1].trim();
    if (modelMatch) sections.mentalModel = modelMatch[1].trim();
    if (failureMatch) sections.failurePattern = failureMatch[1].trim();
    if (standardMatch) sections.standard = standardMatch[1].trim();
    if (actionMatch) sections.action = actionMatch[1].trim();

    return sections;
}

// Display the response
function displayResponse(text) {
    const sections = parseResponse(text);

    responseContainer.innerHTML = `
    <div class="response__section">
      <div class="response__label">Principle</div>
      <div class="response__content response__content--principle">${sections.principle || 'No principle extracted.'}</div>
    </div>
    <div class="response__section">
      <div class="response__label">Mental Model</div>
      <div class="response__content">${sections.mentalModel || 'No model extracted.'}</div>
    </div>
    <div class="response__section">
      <div class="response__label">Failure Pattern</div>
      <div class="response__content">${sections.failurePattern || 'No pattern extracted.'}</div>
    </div>
    <div class="response__section">
      <div class="response__label">Standard</div>
      <div class="response__content">${sections.standard || 'No standard extracted.'}</div>
    </div>
    <div class="response__section">
      <div class="response__label">Action</div>
      <div class="response__content response__content--action">${sections.action || 'No action extracted.'}</div>
    </div>
  `;

    responseContainer.classList.add('response--active');
}

// Display error
function displayError(error) {
    if (error.message.includes('API key')) {
        localStorage.removeItem('mos_gemini_key');
        showApiKeyPrompt();
        return;
    }

    responseContainer.innerHTML = `
    <div class="response__section">
      <div class="response__label">Error</div>
      <div class="response__content">${error.message}</div>
    </div>
  `;
    responseContainer.classList.add('response--active');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
