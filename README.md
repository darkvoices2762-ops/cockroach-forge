# Cockroach Forge — AI Text-to-Speech Studio

<div align="center">
  <img src="static/assets/logo.svg" alt="Cockroach Forge audio waveform logo" width="112">
  <h2>Local-first speech synthesis powered by Pocket TTS</h2>
  <p>Developed by Azaad &amp; Usman</p>
</div>

Cockroach Forge is a desktop-oriented AI text-to-speech studio. Its local FastAPI backend serves a browser interface for generating speech, managing voices, making batches, and working with voice-cloning features when supported by the installed model.

## What it can do

- Generate speech with the configured Pocket TTS engine.
- Browse and search built-in voices, and preview voices.
- Create voice profiles from reference audio when the model setup supports cloning. Only use recordings with the speaker's permission.
- Generate multiple text lines and download the results as a ZIP.
- Adjust available audio options, including speed, pitch, reverb, output format, and optional background music.
- Review and download recent audio history.

## Run it on Windows

1. Install a supported Python version and make sure `python` is available in Command Prompt.
2. Extract the Cockroach Forge project folder.
3. Double-click `Setup.bat` and let it install the dependencies.
4. Start the app with `CockroachForge.vbs` (the setup script can launch it too).
5. Open [http://127.0.0.1:7860](http://127.0.0.1:7860) if the browser does not open automatically.

The first model load can take longer and may download model files. Pocket TTS features and voice cloning depend on the installed model and its access requirements.

## Manual setup

From the project folder, create and activate a virtual environment, then install the dependencies:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
python engine/server.py
```

Then visit [http://127.0.0.1:7860](http://127.0.0.1:7860). Some audio effects and conversions may require FFmpeg on your PATH.

## Privacy and deployment

Cockroach Forge is configured for local use. Do not expose the development server to the public internet as-is. A public deployment needs authentication and authorization, rate limits, request-size limits, secure persistent storage, monitoring, and an appropriate privacy and retention policy. Static hosting alone cannot run the Python TTS engine; see [CLOUD_DEPLOYMENT.md](CLOUD_DEPLOYMENT.md) before considering a hosted deployment.

Do not commit tokens, passwords, private voice recordings, cloned-voice state, generated audio, logs, or virtual environments. Check the licenses and usage conditions for Pocket TTS, models, and dependencies before commercial use.

## Source and permissions

Cockroach Forge is a rebranded adaptation of [VoiceForge by Usman Mahfooz](https://github.com/usmanmahfooz/VoiceForge), made with permission from the original developer. Cockroach Forge is developed by Azaad and Usman. The source repository does not include a general-purpose open-source license; this project does not add or imply one. Follow the permission granted by the original developer for any reuse or redistribution beyond this adaptation.
