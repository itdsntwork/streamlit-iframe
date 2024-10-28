import streamlit as st
from streamlit_iframe import streamlit_iframe

testData = {
    "src": "http://localhost:8888/iframe-test",
    "height": "500px",
    "width": "600px",
}

# Add some test code to play with the component while it's in development.
# During development, we can run this just as we would any other Streamlit
# app: `$ streamlit run streamlit_iframe/example.py`

st.subheader("Streamlit iframe component")

# Initialize a list to store event values
if 'events' not in st.session_state:
    st.session_state.events = []

event = streamlit_iframe(testData)

# Append the new event value to the list
st.session_state.events.append(event)

# Display all stored event values
for e in st.session_state.events:
    st.markdown(e)
