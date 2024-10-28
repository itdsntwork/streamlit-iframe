# Streamlit IFrame Component

This component is an iframe wrapper that allows you to render an HTML iframe component and receive data posted using `window.parent.postMessage` in the `src` URL.

## Features

- Render an HTML iframe within a Streamlit app.
- Capture and return data posted from the iframe using `window.parent.postMessage`.

## Installation

To set up the development environment, follow these steps:

1. Create a virtual environment:
    ```sh
    python3 -m venv .venv
    source .venv/bin/activate
    ```

2. Install the required dependencies:
    ```sh
    pip install streamlit
    ```

## Running the Example

To run the example Streamlit app, use the following command:
```sh
streamlit run ./example.py
```