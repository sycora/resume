import React, {Component} from 'react';

class User extends Component {
  render() {
    const {
      emailAddress,
      firstName,
      formattedName,
      headline,
      industry,
      lastName,
      location: {
        country: {
          code: countryCode
        },
        name: location
      },
      numConnections,
      numConnectionsCapped,
      pictureUrl: smallPictureUrl,
      pictureUrls: {
        values: [largePictureUrl]
      },
      positions: {
        values: positions
      },
      publicProfileUrl,
      summary
    } = this.props;
    return (
      <div>
        <h2>Profile</h2>
        <section>
          <img alt="large profile" src={largePictureUrl} hidden/>
          <h3>{formattedName} - {headline}</h3>
          {location}
        </section>
        <p><strong>Industry</strong> {industry}</p>
        <p><strong>Number of Connections</strong> {numConnections}</p>
        <p><strong>Connections Capped</strong> {numConnectionsCapped}</p>
        <p><strong>Email</strong> {emailAddress}</p>
        <h2>Positions</h2>
        {positions.map((p, i) => {
          return (
            <div key={i}>
              <h3>{p.company.name}</h3>
              {p.isCurrent && <p>(currently held)</p>}
              <p>{p.title}</p>
              <p>{p.summary}</p>
              <p><strong>Industry</strong> {p.company.industry}</p>
              <p><strong>Size</strong> {p.company.size}</p>
              <p><strong>Type</strong> {p.company.type}</p>
              {p.location && <p>{p.location.name}</p>}
              <p><strong>Start date</strong> {p.startDate.month}/{p.startDate.year}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default User;
