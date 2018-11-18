import React from 'react';
import './usps-section.scss';
import enterprise from '../../assets/images/enterprise.png';
import data from '../../assets/images/data.png';
import vdi from '../../assets/images/vdi.png';

const UspsSection = () => {
  return (
    <div className="usps">
      <div className="container">
        <div className="tile">
          <h4 className="title">Enterprise</h4>
          <p className="subtitle">Pabst air plant cornhole hot chicken iceland gentrify
          jianbing chicharrones quinoa kinfolk VHS mlkshk. Poke banh mi PBR&B, cardigan
          selvage whatever venmo cliche normcore.
          </p>
          <img
            className="image"
            src={enterprise}
            alt="enterprise"
          />
        </div>
        <div className="tile">
          <h4 className="title">Big Data</h4>
          <p className="subtitle">Fixie celiac pabst irony fanny pack helvetica mustache
          jianbing portland pug shaman. Selfies brunch squid everyday carry cliche asymmetrical
          cred etsy gochujang typewriter.
          </p>
          <img
            className="image"
            src={data}
            alt="data"
          />
        </div>
        <div className="tile">
          <h4 className="title">VDI</h4>
          <p className="subtitle">Everyday carry cronut coloring book pinterest kickstarter
          flannel DIY ramps fingerstache venmo schlitz swag ugh forage. Food truck lomo
          godard vinyl sustainable tbh lo-fi.
          </p>
          <img
            className="image"
            src={vdi}
            alt="vdi"
          />
        </div>
      </div>
    </div>
  );
};

export default UspsSection;
