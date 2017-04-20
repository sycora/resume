const request = require('request');

exports.accessToken = (req, res) => {
  res.header('Content-Type','application/json');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Origin', 'http://resume.sycora.com');
  res.header('Access-Control-Allow-Methods', 'POST');
  if (req.method == 'OPTIONS') {
    return res.sendStatus(204);
  }
  if (req.method !== 'POST') {
    return res.sendStatus(404);
  }
  if (req.body.client_id !== '77oc2rb90riu2a') {
    return res.sendStatus(400);
  }
  // TODO: use joi to validate
  request.post({
    url: 'https://www.linkedin.com/oauth/v2/accessToken?format=json',
    form: {
      grant_type: 'authorization_code',
      code: req.body.code,
      redirect_uri: req.body.redirect_uri,
      client_id: req.body.client_id,
      client_secret: ''
    }
    },
    json: true
  }, (err, response, body) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(body);
    }
  });
}
