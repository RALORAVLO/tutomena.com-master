import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';

import wordpressIcon from '../../content/images/wordpress-service.png';
import websiteIcon from '../../content/images/website-service.png';
import consultingIcon from '../../content/images/consulting-service.png';
import writingIcon from '../../content/images/writing-service.png';

export default function ServicesPage() {
  return (
    <Layout>
      <SEO />
      <Helmet title={`خدماتنا – ${config.siteTitle}`} />
      <div className="container page-services">
        <h1>خدماتنا</h1>
        <div className="services">
          <div className="service">
            <div className="icon">
              <img src={wordpressIcon} alt="" />
            </div>
            <h2>
              إنشاء مدونات ومواقع ووردبريس <strong>احترافية</strong>
            </h2>
          </div>
          <div className="service">
            <div className="icon">
              <img src={websiteIcon} alt="" />
            </div>
            <h2>
              بناء مواقع وتطبيقات ويب <strong>حديثة وعصرية</strong>
            </h2>
          </div>
          <div className="service">
            <div className="icon">
              <img src={consultingIcon} alt="" />
            </div>
            <h2>
              تقديم الإستشارات
              <br />
              التقنية
            </h2>
          </div>
          <div className="service">
            <div className="icon">
              <img src={writingIcon} alt="" />
            </div>
            <h2>
              كتابة مقالات تقنية <br />
              <strong>عميقة ومفصلة</strong>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}
