import React from 'react';
import styles from './styles.module.css';
import Feature from './feature';

const FeatureList = [
  {
    title: '1. Data Cohort Definition',
    url: 'img/projects.png',
    link:'/docs/category/omop-mapping',
    description: (
      <>
        Facilitate data interoperability by mapping data to the Observational Medical Outcomes Partnership (OMOP) Common Data Model.
      </>
    ),
  },

  {
    title: '2. OMOP Mapping',
    url: 'img/data_processing.png',
    link:'/docs/category/data-processing',
    description: (
      <>
        Perform standardized data processing and data quality assessment.
      </>
    ),
  },

  {
    title: '3. Data Uploading',
    url: 'img/datasets.png',
    link:'/docs/category/data-uploading',
    description: (
      <>
        Upload datasets from each site to centerized data warehouse.
      </>
    ),
  },

];

export default function HomepageIcons() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
