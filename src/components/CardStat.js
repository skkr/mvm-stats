import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const CardStat = props => {
  const { mainTitile, mainValue, linkTitle, link, icon, textColor } = props;
  return (
    <div className="card-body text-center">
      <Link
        onMouseDown={()=>$('[data-toggle="tooltip"]').tooltip('hide') }
        to={link} className="card-icon" data-toggle="tooltip" data-placement="top" title={linkTitle}>
        <i className="material-icons link-light">help_outline</i>
      </Link>
      <i className="material-icons material-icons material-icons--xl">{icon}</i>
      <h1 className="h5 text-muted"><strong>{mainTitile}</strong></h1>
      <p className={`font--alt text--xl ${textColor}`}> <strong>{mainValue}</strong></p>
    </div>
  )
}

CardStat.defaultProps = {
  linkTitle: 'More info...',
  link: 'FAQ',
}
export default CardStat;
