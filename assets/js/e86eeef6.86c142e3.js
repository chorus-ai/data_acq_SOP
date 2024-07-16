"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[120],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=i,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},249:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={},o="Uploading to Central Data Warehouse",l={unversionedId:"Data-Uploading/Data_uploading",id:"Data-Uploading/Data_uploading",title:"Uploading to Central Data Warehouse",description:"Download Data Uploading SOP doc",source:"@site/docs/Data-Uploading/Data_uploading.md",sourceDirName:"Data-Uploading",slug:"/Data-Uploading/Data_uploading",permalink:"/data_acq_SOP/docs/Data-Uploading/Data_uploading",draft:!1,editUrl:"https://github.com/chorus-ai/data_acq_SOP/edit/main/sop-website/docs/Data-Uploading/Data_uploading.md",tags:[],version:"current",lastUpdatedBy:"Del Bold",lastUpdatedAt:1721159189,formattedLastUpdatedAt:"Jul 16, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Broad SOP for data preparation",permalink:"/data_acq_SOP/docs/Data-Uploading/Broad SOP"},next:{title:"Data Serving",permalink:"/data_acq_SOP/docs/category/data-serving"}},d={},s=[{value:"Purpose",id:"purpose",level:2},{value:"Upload schedule",id:"upload-schedule",level:2},{value:"Rationale",id:"rationale",level:2},{value:"The centralized cloud environment",id:"the-centralized-cloud-environment",level:2},{value:"Target folder structure",id:"target-folder-structure",level:2},{value:"Expectations as to file content",id:"expectations-as-to-file-content",level:2},{value:"The OMOP EHR folder",id:"the-omop-ehr-folder",level:3},{value:"The Waveforms folder",id:"the-waveforms-folder",level:3},{value:"Example File Name",id:"example-file-name",level:4},{value:"The Images folder",id:"the-images-folder",level:3},{value:"Example of a DICOM Image Name",id:"example-of-a-dicom-image-name",level:4},{value:"Update mechanism",id:"update-mechanism",level:2}],c={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"uploading-to-central-data-warehouse"},"Uploading to Central Data Warehouse"),(0,i.kt)("p",null," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chorus-ai/data_acq_SOP/blob/main/sop-website/docs/Data-Uploading/Data%20Upload%20SOP.docx"},"Download Data Uploading SOP doc")),(0,i.kt)("h2",{id:"purpose"},"Purpose"),(0,i.kt)("p",null,"The purpose of this Standard Operating Procedure (SOP) is to specify the expected structure of the data to be uploaded to the central CHoRUS cloud environment."),(0,i.kt)("h2",{id:"upload-schedule"},"Upload schedule"),(0,i.kt)("p",null,"Upload of a pilot dataset of a minimum of 25 patients is required from each site July 15, 2023. This specific request is detailed is previous comuunication and also {here}. The first upload of 25% of patients contributed to the CHoRUS dataset is due December 30th, 2023. The second, third and last uploads will be due on September 30th of 2024, 2025, and 2026."),(0,i.kt)("h2",{id:"rationale"},"Rationale"),(0,i.kt)("p",null,"Sites will generate data that will need to merged in such a way that the end-user is agnostic of data provenance. Data merging is facilitated by data generation sites developing a process which results in the production of data files that are compatible in format, uploaded to pre-determined folder architecture. The purpose of this SOP is to describe this folder architecture. CHoRUS does not require that each data generation site creates and populates a folder architecture that emulates the central architecture, although doing so may facilitate the debugging of applications dedicated to central uploading of data."),(0,i.kt)("h2",{id:"the-centralized-cloud-environment"},"The centralized cloud environment"),(0,i.kt)("p",null,"This virtual environment is hosted in an Azure platform. The containers structure is setup such that each data generation site (DGS) can access their home folder (e.g. /CHoRUSDataContainers/yourDGS)."),(0,i.kt)("img",{width:"1000",alt:"containers",src:"https://github.com/chorus-ai/data_acq_SOP/assets/2847495/d7d1d67a-2695-4b2d-92aa-2285b608a09d"}),(0,i.kt)("h2",{id:"target-folder-structure"},"Target folder structure"),(0,i.kt)("p",null,"Each DGS will be required to deposit data and metadata files in a dedicated centralized staging environment. This staging environment is a virtual linux server with read/write access for each DGS to their own home folders. The root folder should also contain an updated ReadMe file describing the contain to be found under each data folder and a running history of uploads. We have not planned to provide a template for the ReadMe file, but may do so as needed. Please refer to Figure 1 which depicts the folder structure to upload to."),(0,i.kt)("img",{width:"1000",alt:"containers",src:"https://github.com/chorus-ai/data_acq_SOP/assets/2847495/9ea5ef46-8e13-491a-a357-da41e995f84e"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Folder Architecture Details")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Folder Architecture Details",src:a(5825).Z,width:"864",height:"792"})),(0,i.kt)("h2",{id:"expectations-as-to-file-content"},"Expectations as to file content"),(0,i.kt)("h3",{id:"the-omop-ehr-folder"},"The OMOP EHR folder"),(0,i.kt)("p",null,"This folder should include structured and unstructured 13 OMOP clinical data files(exluding specimen table) as found here (",(0,i.kt)("a",{parentName:"p",href:"https://ohdsi.github.io/CommonDataModel/cdm54.html#Clinical_Data_Tables"},"https://ohdsi.github.io/CommonDataModel/cdm54.html#Clinical_Data_Tables"),'). We are not requiring actual notes to be included in the "note_text" field of the NOTE table, but since working with the NOTE_NLP table would greatly benefit from access to foreign keys only present in the NOTE table. Thus the note table should at least contain core identifiers (note_id), descriptors (note_type_concept_id and note_class_concept_id) as well as there foreign keys to PERSON, VISIT_OCURRENCE, VISIT_DETAILS. Each of these table will be in the form of comma delimited files with header rows, with only the records pertaining to the person_id of interest. It will be a centralized responsibility to collate all patients from all sites into a queryable environment.'),(0,i.kt)("h3",{id:"the-waveforms-folder"},"The Waveforms folder"),(0,i.kt)("p",null,"According to usage described in the DA SOPs {links}, Waveform data refers to all data acquired from bedside monitors and devices, including alarms, numerics data obtain at regular of irregular intervals, and high-frequency (>1 Hz) waveform data such as digitized EKG tracings."),(0,i.kt)("p",null,"This folder will include a single source(h5, wfdb, adibin) file collating all waveform data, inclusive of its metadata, in removed PHI form."),(0,i.kt)("p",null,"Adjustments to the naming convention for clinical waveform data stored in this case in HDF5 format are made to include the duration in seconds and exclude the modality or type of waveform. The format is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Patient Identification"),": A unique person ID, typically a number or numeric digits from OMOP Person Table."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Study Date"),": The date when the waveform data was recorded, in the format ",(0,i.kt)("inlineCode",{parentName:"li"},"YYYYMMDD"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Start Time"),": The start time of the recording, in ",(0,i.kt)("inlineCode",{parentName:"li"},"HHMMSS")," format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Duration in Seconds"),": The duration of the recording in seconds.")),(0,i.kt)("h4",{id:"example-file-name"},"Example File Name"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PersonID_20230101_101530_3600.h5")),(0,i.kt)("p",null,"This example represents a recording for PersonID on January 1, 2023, starting at 10:15:30, with a duration of 3600 seconds."),(0,i.kt)("h3",{id:"the-images-folder"},"The Images folder"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Patient Identification"),": Typically includes a person ID.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Study Date"),": The date when the study was conducted, usually in the format ",(0,i.kt)("inlineCode",{parentName:"p"},"YYYYMMDD"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Study Time"),": The time of the study, often in ",(0,i.kt)("inlineCode",{parentName:"p"},"HHMMSS")," format.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Modality"),": Refers to the type of equipment used for the scan, such as MR (Magnetic Resonance), CT (Computed Tomography), or US (Ultrasound).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Series Number"),": Indicates the sequence of a particular series of images in a study.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Instance Number"),": Represents the specific image number within a series."))),(0,i.kt)("h4",{id:"example-of-a-dicom-image-name"},"Example of a DICOM Image Name"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PersonID_20230101_101530_CT_01_001.dcm")),(0,i.kt)("p",null,"This example would represent a CT scan for a patient, conducted on January 1, 2023, at 10:15:30. This image is the first in its instances and the first in that series. Make sure instance and series match with dicom metadata. "),(0,i.kt)("h2",{id:"update-mechanism"},"Update mechanism"),(0,i.kt)("p",null,"It is expected that updates will be limited to the inclusion of new patient_id folders, as well as completion of data files in existing folders as these become more complete or updated following mandatory quality checks. For example, image files become available. These updates can be asynchronous with the expected yearly major uploads, but the ReadMe file must accurately reflect the content of the data folders (/OMOP, /Waveforms and /Images)"))}p.isMDXComponent=!0},5825:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/folderStructureDetail-320f73d0c87abf8705bcdff0cd80df34.png"}}]);