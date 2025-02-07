const sampleIncidents = {
    incident1: {
        sensorId: "Sensor_01",
        timestamp: "2023-10-15T14:23",
        status: "Partial Data Loss",
        errorCode: "ERR-502",
        detectedIssue: "Corrupted Pixels",
        confidenceScore: "92",
        latitude: "48.8566",
        longitude: "2.3522",
        trend: "Increasing data loss",
        predictedCause: "Intermittent Transmission Error",
        likelihood: "High",
        incidentType: "Data Transmission Error",
        priority: "High",
        recommendedAction: "Retry Transmission and Notify Ground Station Team"
    },
    incident2: {
        sensorId: "Sensor_02",
        timestamp: "2023-11-14T15:45",
        status: "Full Data Loss",
        errorCode: "ERR-203",
        detectedIssue: "Missing Data",
        confidenceScore: "92",
        latitude: "34.0522",
        longitude: "-118.2437",
        trend: "Sudden failure",
        predictedCause: "Sensor Malfunction",
        likelihood: "Medium",
        incidentType: "Sensor Malfunction",
        priority: "Medium",
        recommendedAction: "Hardware diagnostic required"
    },
    incident3: {
        sensorId: "Sensor_03",
        timestamp: "2023-11-13T08:15",
        status: "Partial Data Loss",
        errorCode: "ERR-305",
        detectedIssue: "Corrupted Pixels",
        confidenceScore: "78",
        latitude: "51.5074",
        longitude: "-0.1278",
        trend: "Intermittent connectivity",
        predictedCause: "Ground Station Connectivity Issue",
        likelihood: "Medium",
        incidentType: "Ground Station Connectivity Issue",
        priority: "High",
        recommendedAction: "Check ground station systems"
    },
    incident4: {
        sensorId: "Sensor_04",
        timestamp: "2023-11-12T12:30",
        status: "Normal Operation",
        errorCode: "ERR-404",
        detectedIssue: "No Anomalies Detected",
        confidenceScore: "100",
        latitude: "40.7128",
        longitude: "-74.0060",
        trend: "No issues observed",
        predictedCause: "Resolved Connectivity Issue",
        likelihood: "Low",
        incidentType: "Resolved - Data Transmission Error",
        priority: "Low",
        recommendedAction: "Continue monitoring"
    },
    incident5: {
        sensorId: "Sensor_05",
        timestamp: "2023-11-16T09:00",
        status: "Full Data Loss",
        errorCode: "ERR-502",
        detectedIssue: "Missing Data",
        confidenceScore: "95",
        latitude: "37.7749",
        longitude: "-122.4194",
        trend: "Extended data loss",
        predictedCause: "Sensor Malfunction",
        likelihood: "High",
        incidentType: "Sensor Malfunction",
        priority: "High",
        recommendedAction: "Replace faulty sensor"
    },
    incident6: {
        sensorId: "Sensor_06",
        timestamp: "2023-11-14T18:25",
        status: "Partial Data Loss",
        errorCode: "ERR-506",
        detectedIssue: "Corrupted Pixels",
        confidenceScore: "88",
        latitude: "34.0522",
        longitude: "-118.2437",
        trend: "Gradual decline in data quality",
        predictedCause: "Intermittent Transmission Error",
        likelihood: "Medium",
        incidentType: "Data Transmission Error",
        priority: "Medium",
        recommendedAction: "Reset transmission parameters"
    },
    incident7: {
        sensorId: "Sensor_07",
        timestamp: "2023-11-17T16:10",
        status: "Normal Operation",
        errorCode: "ERR-104",
        detectedIssue: "No Anomalies Detected",
        confidenceScore: "100",
        latitude: "51.1657",
        longitude: "10.4515",
        trend: "Stable, no anomalies",
        predictedCause: "No issues detected",
        likelihood: "Low",
        incidentType: "Resolved - Data Transmission Error",
        priority: "Low",
        recommendedAction: "No action required"
    },
    incident8: {
        sensorId: "Sensor_08",
        timestamp: "2023-11-15T14:40",
        status: "Full Data Loss",
        errorCode: "ERR-503",
        detectedIssue: "Missing Data",
        confidenceScore: "98",
        latitude: "48.8566",
        longitude: "2.3522",
        trend: "Sudden data drop",
        predictedCause: "Ground Station Connectivity Issue",
        likelihood: "High",
        incidentType: "Ground Station Connectivity Issue",
        priority: "High",
        recommendedAction: "Verify satellite connection"
    },
    incident9: {
        sensorId: "Sensor_09",
        timestamp: "2023-11-14T22:20",
        status: "Partial Data Loss",
        errorCode: "ERR-405",
        detectedIssue: "Corrupted Pixels",
        confidenceScore: "84",
        latitude: "35.6895",
        longitude: "139.6917",
        trend: "Intermittent anomalies detected",
        predictedCause: "Intermittent Transmission Error",
        likelihood: "Medium",
        incidentType: "Data Transmission Error",
        priority: "Medium",
        recommendedAction: "Reinitialize communication channel"
    },
    incident10: {
        sensorId: "Sensor_10",
        timestamp: "2023-11-13T07:30",
        status: "Normal Operation",
        errorCode: "ERR-102",
        detectedIssue: "No Anomalies Detected",
        confidenceScore: "100",
        latitude: "40.7306",
        longitude: "-73.9352",
        trend: "Continuous stable operation",
        predictedCause: "No issues detected",
        likelihood: "Low",
        incidentType: "Resolved - Data Transmission Error",
        priority: "Low",
        recommendedAction: "Maintain monitoring"
    },
    incident11: {
        sensorId: "Sensor_11",
        timestamp: "2023-11-16T10:30",
        status: "Partial Data Loss",
        errorCode: "ERR-201",
        detectedIssue: "Corrupted Pixels",
        confidenceScore: "87",
        latitude: "39.9042",
        longitude: "116.4074",
        trend: "Increasing data anomalies",
        predictedCause: "Intermittent Transmission Error",
        likelihood: "High",
        incidentType: "Data Transmission Error",
        priority: "High",
        recommendedAction: "Check network stability"
    },
    incident12: {
        sensorId: "Sensor_12",
        timestamp: "2023-11-15T18:00",
        status: "Full Data Loss",
        errorCode: "ERR-302",
        detectedIssue: "Missing Data",
        confidenceScore: "93",
        latitude: "37.7749",
        longitude: "-122.4194",
        trend: "Total loss observed",
        predictedCause: "Sensor Malfunction",
        likelihood: "High",
        incidentType: "Sensor Malfunction",
        priority: "High",
        recommendedAction: "Replace sensor and perform diagnostic"
    },
    incident13: {
        sensorId: "Sensor_13",
        timestamp: "2023-11-17T09:25",
        status: "Normal Operation",
        errorCode: "ERR-401",
        detectedIssue: "No Anomalies Detected",
        confidenceScore: "100",
        latitude: "34.0522",
        longitude: "-118.2437",
        trend: "Stable performance",
        predictedCause: "No issues detected",
        likelihood: "Low",
        incidentType: "Resolved - Data Transmission Error",
        priority: "Low",
        recommendedAction: "Monitor for potential issues"
    },
    incident14: {
        sensorId: "Sensor_14",
        timestamp: "2023-11-16T11:10",
        status: "Partial Data Loss",
        errorCode: "ERR-405",
        detectedIssue: "Corrupted Pixels",
        confidenceScore: "77",
        latitude: "51.5074",
        longitude: "-0.1278",
        trend: "Occasional disruptions",
        predictedCause: "Ground Station Connectivity Issue",
        likelihood: "Medium",
        incidentType: "Ground Station Connectivity Issue",
        priority: "Medium",
        recommendedAction: "Check satellite connection"
    },
    incident15: {
        sensorId: "Sensor_15",
        timestamp: "2023-11-14T13:40",
        status: "Full Data Loss",
        errorCode: "ERR-503",
        detectedIssue: "Missing Data",
        confidenceScore: "99",
        latitude: "40.7306",
        longitude: "-73.9352",
        trend: "Sudden data loss",
        predictedCause: "Sensor Malfunction",
        likelihood: "High",
        incidentType: "Sensor Malfunction",
        priority: "High",
        recommendedAction: "Replace sensor hardware"
    },
    incident16: {
        sensorId: "Sensor_16",
        timestamp: "2023-11-13T16:25",
        status: "Partial Data Loss",
        errorCode: "ERR-601",
        detectedIssue: "Corrupted Pixels",
        confidenceScore: "80",
        latitude: "48.8566",
        longitude: "2.3522",
        trend: "Gradual data degradation",
        predictedCause: "Intermittent Transmission Error",
        likelihood: "Medium",
        incidentType: "Data Transmission Error",
        priority: "Medium",
        recommendedAction: "Reset transmission buffers"
    },
    incident17: {
        sensorId: "Sensor_17",
        timestamp: "2023-11-15T12:30",
        status: "Normal Operation",
        errorCode: "ERR-502",
        detectedIssue: "No Anomalies Detected",
        confidenceScore: "100",
        latitude: "40.7128",
        longitude: "-74.0060",
        trend: "No issues detected",
        predictedCause: "Resolved Connectivity Issue",
        likelihood: "Low",
        incidentType: "Resolved - Data Transmission Error",
        priority: "Low",
        recommendedAction: "No action needed"
    },
    incident18: {
        sensorId: "Sensor_18",
        timestamp: "2023-11-14T22:10",
        status: "Full Data Loss",
        errorCode: "ERR-701",
        detectedIssue: "Missing Data",
        confidenceScore: "90",
        latitude: "51.1657",
        longitude: "10.4515",
        trend: "Immediate failure",
        predictedCause: "Ground Station Connectivity Issue",
        likelihood: "High",
        incidentType: "Ground Station Connectivity Issue",
        priority: "High",
        recommendedAction: "Investigate ground station status"
    },
    incident19: {
        sensorId: "Sensor_19",
        timestamp: "2023-11-13T19:45",
        status: "Partial Data Loss",
        errorCode: "ERR-804",
        detectedIssue: "Corrupted Pixels",
        confidenceScore: "83",
        latitude: "35.6895",
        longitude: "139.6917",
        trend: "Inconsistent data quality",
        predictedCause: "Intermittent Transmission Error",
        likelihood: "Medium",
        incidentType: "Data Transmission Error",
        priority: "Medium",
        recommendedAction: "Reinitialize communication channel"
    },
    incident20: {
        sensorId: "Sensor_20",
        timestamp: "2023-11-14T10:50",
        status: "Normal Operation",
        errorCode: "ERR-102",
        detectedIssue: "No Anomalies Detected",
        confidenceScore: "100",
        latitude: "39.7392",
        longitude: "-104.9903",
        trend: "Stable with no disruptions",
        predictedCause: "No issues detected",
        likelihood: "Low",
        incidentType: "Resolved - Data Transmission Error",
        priority: "Low",
        recommendedAction: "Monitor periodically"
    },
    incident21: {
        sensorId: "Sensor_21",
        timestamp: "2023-11-15T15:30",
        status: "Full Data Loss",
        errorCode: "ERR-905",
        detectedIssue: "Missing Data",
        confidenceScore: "92",
        latitude: "34.0522",
        longitude: "-118.2437",
        trend: "Unexpected failure",
        predictedCause: "Sensor Malfunction",
        likelihood: "High",
        incidentType: "Sensor Malfunction",
        priority: "High",
        recommendedAction: "Replace sensor and check wiring"
    },
    incident22: {
        sensorId: "Sensor_22",
        timestamp: "2023-11-16T17:55",
        status: "Partial Data Loss",
        errorCode: "ERR-902",
        detectedIssue: "Corrupted Pixels",
        confidenceScore: "76",
        latitude: "40.7306",
        longitude: "-73.9352",
        trend: "Intermittent issues",
        predictedCause: "Ground Station Connectivity Issue",
        likelihood: "Medium",
        incidentType: "Ground Station Connectivity Issue",
        priority: "Medium",
        recommendedAction: "Verify connectivity settings"
    },
    incident23: {
        sensorId: "Sensor_23",
        timestamp: "2023-11-14T14:50",
        status: "Normal Operation",
        errorCode: "ERR-903",
        detectedIssue: "No Anomalies Detected",
        confidenceScore: "100",
        latitude: "51.5074",
        longitude: "-0.1278",
        trend: "Stable operation",
        predictedCause: "No issues detected",
        likelihood: "Low",
        incidentType: "Resolved - Data Transmission Error",
        priority: "Low",
        recommendedAction: "Routine maintenance"
    },
    incident24: {
        sensorId: "Sensor_24",
        timestamp: "2023-11-15T13:20",
        status: "Partial Data Loss",
        errorCode: "ERR-604",
        detectedIssue: "Corrupted Pixels",
        confidenceScore: "90",
        latitude: "37.7749",
        longitude: "-122.4194",
        trend: "Data degradation observed",
        predictedCause: "Intermittent Transmission Error",
        likelihood: "Medium",
        incidentType: "Data Transmission Error",
        priority: "Medium",
        recommendedAction: "Investigate signal interference"
    },
    incident25: {
        sensorId: "Sensor_25",
        timestamp: "2023-11-14T11:30",
        status: "Full Data Loss",
        errorCode: "ERR-305",
        detectedIssue: "Missing Data",
        confidenceScore: "95",
        latitude: "34.0522",
        longitude: "-118.2437",
        trend: "Complete failure",
        predictedCause: "Sensor Malfunction",
        likelihood: "High",
        incidentType: "Sensor Malfunction",
        priority: "High",
        recommendedAction: "Replace sensor unit"
    }
};

// Form validation
const form = document.getElementById('incidentForm');
const emailDisplay = document.getElementById('emailDisplay');
const emailContent = document.getElementById('emailContent');
const responseBtn = document.getElementById('responseBtn');
const responseModal = new bootstrap.Modal(document.getElementById('responseModal'));
const sendResponseBtn = document.getElementById('sendResponseBtn');
// const statusDisplay = document.getElementById('statusDisplay');
const statusContent = document.getElementById('statusContent');
const finalEmailDisplay = document.getElementById('finalEmailDisplay');
const finalEmailContent = document.getElementById('finalEmailContent');

let initialData = null;

// Add event listener for sample incident selection
document.getElementById('sampleIncidents').addEventListener('change', (e) => {
    const selectedIncident = sampleIncidents[e.target.value];
    if (!selectedIncident) return;

    // Populate form fields with selected incident data
    Object.entries(selectedIncident).forEach(([key, value]) => {
        const element = form.elements[key];
        if (element) {
            element.value = value;
        }
    });

    // Add validation classes
    form.classList.add('was-validated');
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
    }

    const formData = new FormData(form);
    initialData = Object.fromEntries(formData);

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Generating...';
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://llmfoundry.straive.com/openai/v1/chat/completions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system", content: `You are the Satellite Imagery Optimizer Incident Management Agent. Generate an alert email based on the incident data. Do not display any placeholder like Your name, Your company, etc.
                    Generate the email like this - 
                    Subject: Urgent: High-Priority Incident - Data Transmission Error in Region X (Paris, France)

Dear Ground Station Team,

A high-priority incident has been detected in satellite imagery data for Region X (Latitude: 48.8566, Longitude: 2.3522, Paris, France). Below is a summary of the issue:

**Summary**:
- Sensor ID: Sensor_42
- Timestamp: 2023-10-15 14:23:45 UTC
- Status: Partial Data Loss (Error Code: ERR-502)
- Detected Issue: Corrupted pixels in the imagery with a confidence score of 92%.

**Analysis**:
- Temporal analysis indicates data loss has been occurring intermittently over the last 3 hours.
- The predicted cause is an intermittent transmission error, with a high likelihood of persistence.

**Impact**:
- The corrupted data affects critical surveillance operations in the specified region.
- Immediate action is required to prevent further data loss and ensure mission continuity.

**Recommended Actions**:
1. Retry the data transmission process for Sensor_42.
2. Investigate and resolve any ground station or transmission issues.
3. Escalate to engineering if the issue persists after retrying.

**Urgency Level**: HIGH

Please address this issue as soon as possible and provide an update once resolved. If additional support is needed, escalate to the IT Operations team.

Best regards,
Satellite Imagery Optimizer Incident Management Agent
` },
                    { role: "user", content: JSON.stringify(initialData) }
                ]
            })
        });

        const result = await response.json();
        //emailContent.textContent = result.choices?.[0]?.message?.content || "Error generating email";
        const markdownContent = result.choices?.[0]?.message?.content || "Error generating email";
        const htmlContent = marked.parse(markdownContent);

        // Add some basic styling for the markdown
        emailContent.innerHTML = `
        <style>
            .markdown-content {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                padding: 20px;
            }
            .markdown-content h1 { font-size: 24px; margin-bottom: 16px; }
            .markdown-content h2 { font-size: 20px; margin-bottom: 14px; }
            .markdown-content p { margin-bottom: 12px; }
            .markdown-content ul, .markdown-content ol { margin-bottom: 12px; padding-left: 20px; }
            .markdown-content strong { font-weight: bold; }
            .markdown-content em { font-style: italic; }
            .markdown-content code { background-color: #f4f4f4; padding: 2px 4px; border-radius: 4px; }
            .markdown-content blockquote {
                border-left: 4px solid #ddd;
                padding-left: 16px;
                margin-left: 0;
                color: #666;
            }
        </style>
        <div class="markdown-content">
            ${htmlContent}
        </div>
    `;
        emailDisplay.classList.remove('d-none');
    } catch (error) {
        alert('Error generating email: ' + error.message);
    } finally {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
});

responseBtn.addEventListener('click', () => {
    responseModal.show();
});

sendResponseBtn.addEventListener('click', async () => {
    const responseText = document.getElementById('responseText').value;
    if (!responseText.trim()) {
        alert('Please enter a response');
        return;
    }

    sendResponseBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Sending...';
    sendResponseBtn.disabled = true;

    try {
        // Generate updated status

        // statusContent.textContent = Object.entries(resolvedData)
        //     .map(([key, value]) => `${key}: ${value}`)
        //     .join('\n');
        // statusDisplay.classList.remove('d-none');

        // Generate final confirmation email
        const response = await fetch("https://llmfoundry.straive.com/openai/v1/chat/completions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system", content: `Generate a final confirmation email based on the initial alert and response. Check whether the emails are linking to same sensor and location. If not, generate email highlighting incorrect data, else generate email highlighting all the issues that are resolved. Do not display any placeholder like Your name, Your company, etc.
                    Generate the email like this-
                    Subject: Incident Resolved - Confirmation of Fix for Data Transmission Error in Region X (Paris, France)

Dear Ground Station Team,

Thank you for your prompt response and resolution of the high-priority incident related to Sensor_42. Based on the information provided and our subsequent analysis, we can confirm the following:

**Resolution Confirmation**:
- Telemetry logs indicate that data transmission has been successfully restored as of 2023-10-15 16:25:00 UTC.
- Image analysis using CNN confirms no anomalies detected in the latest imagery data for Region X (Latitude: 48.8566, Longitude: 2.3522).

**Validation of Fix**:
- Temporal analysis using LSTM shows no further data loss in the last 30 minutes.
- The predicted cause of the issue (intermittent ground station connectivity) has been resolved, with a low likelihood of recurrence.

**Next Steps**:
1. Continue monitoring Sensor_42 for any signs of recurrence over the next 24 hours.
2. Escalate to engineering if similar issues arise in the future.

The incident has been marked as **Resolved** in our system. Thank you for your swift action and cooperation.

Best regards,
Satellite Imagery Optimizer Incident Management Agent
` },
                    { role: "user", content: `Initial alert: ${emailContent.textContent}\nResponse: ${responseText}` }
                ]
            })
        });

        const result = await response.json();
        //finalEmailContent.textContent = result.choices?.[0]?.message?.content || "Error generating final email";
        const markdownContent = result.choices?.[0]?.message?.content || "Error generating final email";
        const htmlContent = marked.parse(markdownContent);

        // Add some basic styling for the markdown
        finalEmailContent.innerHTML = `
        <style>
            .markdown-content {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                padding: 20px;
            }
            .markdown-content h1 { font-size: 24px; margin-bottom: 16px; }
            .markdown-content h2 { font-size: 20px; margin-bottom: 14px; }
            .markdown-content p { margin-bottom: 12px; }
            .markdown-content ul, .markdown-content ol { margin-bottom: 12px; padding-left: 20px; }
            .markdown-content strong { font-weight: bold; }
            .markdown-content em { font-style: italic; }
            .markdown-content code { background-color: #f4f4f4; padding: 2px 4px; border-radius: 4px; }
            .markdown-content blockquote {
                border-left: 4px solid #ddd;
                padding-left: 16px;
                margin-left: 0;
                color: #666;
            }
        </style>
        <div class="markdown-content">
            ${htmlContent}
        </div>
    `;
        finalEmailDisplay.classList.remove('d-none');

        responseModal.hide();
    } catch (error) {
        alert('Error processing response: ' + error.message);
    } finally {
        sendResponseBtn.innerHTML = 'Send Response';
        sendResponseBtn.disabled = false;
    }
});