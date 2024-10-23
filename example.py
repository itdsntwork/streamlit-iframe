import streamlit as st
from streamlit_iframe import streamlit_iframe

# Add some test code to play with the component while it's in development.
# During development, we can run this just as we would any other Streamlit
# app: `$ streamlit run streamlit_iframe/example.py`

st.subheader("Streamlit iframe component")

# Initialize a list to store event values
if 'events' not in st.session_state:
    st.session_state.events = []

event = streamlit_iframe({
    "src": "https://www.example.com",
    "height": "100%",
    "width": "100%",
})

# Append the new event value to the list
st.session_state.events.append(event)

# Display all stored event values
for e in st.session_state.events:
    st.markdown(e)
