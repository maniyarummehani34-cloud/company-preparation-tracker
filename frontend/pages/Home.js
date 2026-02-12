useEffect(() => {
  axios.get("http://localhost:5000/api/companies")
    .then(res => setCompanies(res.data));
}, []);
