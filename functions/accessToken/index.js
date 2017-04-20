exports.accessToken = (req, res, next) => {
  res.header('Content-Type','application/json');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Origin', 'resume.sycora.com');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  if (req.method == 'OPTIONS') {
    res.sendStatus(204);
  }
  if (req.method !== 'POST') {
    res.sendStatus(404);
  }
  if (req.body.client_id !== '77oc2rb90riu2a') {
    res.sendStatus(400);
  }
  // TODO: use joi to validate
  request.post({
    url: 'https://www.linkedin.com/oauth/v2/accessToken',
    form: {
      grant_type: 'authorization_code',
      code: req.body.code,
      redirect_uri: req.body.redirect_uri,
      client_id: req.body.client_id,
      client_secret: ''
    }
  }, (err, response, body) => {
    console.log(err, response, body);
    res.json(body);
  });
}
