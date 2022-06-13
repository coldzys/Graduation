import streamlit as st
import streamlit.components.v1 as components

one, two = st.columns([1, 1])
with one:
    search = st.button("Search")
with two:
    visualize = st.button("Visualize")

if visualize:
    components.iframe(
        src="http://172.18.0.20:5601/app/r/s/better-fat-airport",
        width=1200,
        height=1600,
        scrolling=True
    )
elif search:
    components.iframe(
        src="http://172.18.0.20:5601/app/discover#/view/2c1ae350-eb0b-11ec-8658-e383fd259a14?_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-30m%2Cto%3Anow))",
        width=1200,
        height=1600,
        scrolling=True
    )
