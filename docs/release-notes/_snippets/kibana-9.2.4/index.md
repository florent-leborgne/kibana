## Kibana 9.2.4 [elastic-release-notes-kibana-9.2.4]
### Features and enhancements [elastic-kibana-9.2.4-features-enhancements]

**Elastic Security solution**
* [Endpoint] Add server configuration setting for disabling the auto install of endpoint rule on policy create. [#246418](https://github.com/elastic/elastic/pull/246418) 
* Persist analyzer dataview in local storage. [#245002](https://github.com/elastic/elastic/pull/245002) 
* Updates kibana MITRE data to `v18.1`. [#246770](https://github.com/elastic/elastic/pull/246770) 

### Fixes [elastic-kibana-9.2.4-fixes]

**Elastic Observability solution**
* Fix console state persisting across journey steps. [#247376](https://github.com/elastic/elastic/pull/247376) 
* Replace `host.hostname` with `host.name` in Infrastructure tab. [#246386](https://github.com/elastic/elastic/pull/246386) 
* Fix validation of maintenance windows in project monitors. [#247880](https://github.com/elastic/elastic/pull/247880) 
* Fix product documentation not available callout icon. [#247885](https://github.com/elastic/elastic/pull/247885) 
* Fix related dashboards for ES Query and other stack rules supported in observability. [#247564](https://github.com/elastic/elastic/pull/247564) 
* [Discover] Fix trace links calculating date range incorrectly. [#247531](https://github.com/elastic/elastic/pull/247531) 
* Use unicode escaping to prevent Agent from interpreting JS template literals as policy variables. [#247284](https://github.com/elastic/elastic/pull/247284) 
* Edit default alerts flow breaks if default rules are not defined. [#245736](https://github.com/elastic/elastic/pull/245736) 
* Only update relevant monitors where maintenance windows exists. [#246088](https://github.com/elastic/elastic/pull/246088) 
* Improved error handling for tool response. [#241425](https://github.com/elastic/elastic/pull/241425) 
* Fix the missing service environment in the custom links. [#248631](https://github.com/elastic/elastic/pull/248631) 
* Cloned managed ilm policies shouldn't be marked as managed. [#248586](https://github.com/elastic/elastic/pull/248586) 
* Add refusal field to assistant conversations. [#243423](https://github.com/elastic/elastic/pull/243423) 
* Improve anonymization error messages when NER model is not available. [#247696](https://github.com/elastic/elastic/pull/247696) 
* [Data Table] Fix link's color contrast. [#247721](https://github.com/elastic/elastic/pull/247721) 

**Machine Learning**
* Fix counter fields missing in Anomaly detection dropdown. [#248187](https://github.com/elastic/elastic/pull/248187) 
* Disable ES|QL field stats for TS command. [#247641](https://github.com/elastic/elastic/pull/247641) 
* Fixing anomaly chart empty query bug. [#246841](https://github.com/elastic/elastic/pull/246841) 
* Data Visualizer: fixes display of map view for small screen sizes. [#247615](https://github.com/elastic/elastic/pull/247615) 

**Alerting**
* Update total event in ES document when attaching an event. [#247996](https://github.com/elastic/elastic/pull/247996) 
* Fix timestamp override for ES|QL CSV scheduled reports with relative time ranges. [#248169](https://github.com/elastic/elastic/pull/248169) 
* Add max character validation to the email connector params and config. [#246453](https://github.com/elastic/elastic/pull/246453) 
* Encode search term in cases page. [#247992](https://github.com/elastic/elastic/pull/247992) 

**Elastic Security solution**
* Use exact match in createdBy notes filter. [#247351](https://github.com/elastic/elastic/pull/247351) 
* Encode URL Components for entities. [#247707](https://github.com/elastic/elastic/pull/247707) 
* Fix alert flyout threat intelligence section not showing multiple values. [#245449](https://github.com/elastic/elastic/pull/245449) 
* Fix API doesn't use an associated conversation's system prompt . [#248020](https://github.com/elastic/elastic/pull/248020) 
* Fix timeline action shown in alerts table bulk actions without proper privilege. [#246150](https://github.com/elastic/elastic/pull/246150) 
* [Notes]: disable delete for read-only users and improve error message. [#247617](https://github.com/elastic/elastic/pull/247617) 
* [Analyzer] ensure we render analyzer only when the dataView is ready. [#245712](https://github.com/elastic/elastic/pull/245712) 
* Fix Integration card in 'manage data sources' always shows 'no data stream' warning. [#246180](https://github.com/elastic/elastic/pull/246180) 
* Fix MITRE coverage overview page filter display bug. [#246794](https://github.com/elastic/elastic/pull/246794) 
* Change alert suppression icon. [#247964](https://github.com/elastic/elastic/pull/247964) 
* [Analyzer] use same dataview in analyzer preview as was selected in analyzer component. [#246081](https://github.com/elastic/elastic/pull/246081) 
* [Entity Analytics][Risk Scoring] Handle special characters in ESQL query for risk scoring. [#247060](https://github.com/elastic/elastic/pull/247060) 

**Discover**
* Fix query drafts when switching tabs. [#247968](https://github.com/elastic/elastic/pull/247968) 
* Fix "Search entire time range" for date nanos. [#248495](https://github.com/elastic/elastic/pull/248495) 
* Fix default app state handling when detecting unsaved changes. [#246664](https://github.com/elastic/elastic/pull/246664) 

**Search**
* Fix: Only run ML saved object check if saving semantic text mapping. [#248462](https://github.com/elastic/elastic/pull/248462) 

**Kibana platform**
* Fix share modal time range issues. [#248804](https://github.com/elastic/elastic/pull/248804) 
* Fix createAuditEvents always returning failure as outcome. [#247152](https://github.com/elastic/elastic/pull/247152) 
* Intersect allowed and authorized types. [#244967](https://github.com/elastic/elastic/pull/244967) 

**Kibana security**
* Fix case sensitivity of fields in role page. [#246069](https://github.com/elastic/elastic/pull/246069) 

**Dashboards and Visualizations**
* Fix compound filters showing unsaved changes on dashboard load. [#247309](https://github.com/elastic/elastic/pull/247309) 
