import streamlit as st
from elasticsearch import Elasticsearch
import pandas as pd
import plotly.express as px

es = Elasticsearch()

st.sidebar.title("Search engine")

with st.sidebar:
    with st.form(key="input-form"):
        state = st.text_input("Insert state")
        year = st.number_input("Insert year", step=1)
        submitted = st.form_submit_button("Submit")
        if submitted:
            results = es.search(
                index="cars",
                body={
                    "query": {
                        "bool": {
                            "must": [
                                {
                                    "match": {
                                        "State": state
                                    }
                                },
                                {
                                    "match": {
                                        "Year": year
                                    }
                                }
                            ]
                        }
                    }
                },
                size=1000
            )

try:
    data = [result["_source"] for result in results["hits"]["hits"]]
    df = pd.DataFrame.from_records(data)
    st.markdown("### Result")
    st.markdown("""---""")
    st.write(df)
    df2 = df.groupby("City")["City"].count().reset_index(name="Count").sort_values("Count", ascending=False).head(25)
    fig = px.bar(df2, x="City", y="Count")
    st.markdown("""---""")
    st.markdown("### City bar chart")
    st.markdown("""---""")
    st.plotly_chart(fig)
except:
    st.write("Please execute any query to display data")
