# SysOps Notes — Content Plan (pulled from 10 years at Virsec & TechTree)

Organized by the categories already in your resume/stack. Aim for one post every 1-2 weeks;
30 posts gets you past the point where AdSense will take you seriously.

## Network security / FortiGate (you already have 1)
1. FortiGate IPSec VPN troubleshooting — done ✅
2. FortiGate SSL VPN won't connect: certificate & routing checklist
3. FortiGate IDS/IPS false positives — tuning signatures without opening holes
4. Micro-segmentation on FortiGate: a practical policy walkthrough
5. FortiAnalyzer log pipeline: catching an incident before it becomes one
6. NIST/CIS hardening checklist for FortiGate, annotated from a real audit

## Cloud — AWS
7. EC2 Auto Scaling group stuck: diagnosing a silent scale-out failure
8. IAM policy debugging: the "AccessDenied" that isn't what it looks like
9. VPC peering / routing table mistakes that cause "works from one subnet, not another"
10. Migrating on-prem to AWS: what actually slows the cutover down

## Cloud — Azure & identity
11. Azure Entra ID (OIDC/SSO) integration gotchas across SaaS apps
12. Diagnosing broken SSO after an app registration change
13. Centralizing access governance across 50+ SaaS accounts — lessons learned

## Virtualization
14. 100+ host VMware ESXi cluster: chasing a performance-degradation ghost
15. vMotion failures — the checklist before you blame the network
16. Capacity planning for multi-cluster VMware without over-provisioning

## Linux / app servers
17. Tomcat won't start after patching — a real RCA
18. JBoss memory leak hunt: heap dumps and what actually helped
19. YUM/RPM patch automation: build the pipeline that stopped 30% of manual toil

## DR / backup
20. Veeam backup job silently failing — the alert you'll miss if you're not looking
21. Designing RTO/RPO targets that survive a SOC 2 audit
22. Zero-data-loss DR across multi-cloud: what "zero" actually requires operationally

## ITSM / incident management
23. Building an MTTR dashboard that leadership actually reads
24. Incident vs. problem vs. change: where teams get the ITIL model wrong in practice
25. Escalation workflows that don't collapse under a P1

## CI/CD & change management
26. Jenkins + Git + Ansible: a rollback that actually worked
27. Change approval gates that catch bad deploys without slowing good ones

## Compliance / audit
28. SOC 2 Type II evidence collection: what auditors actually ask twice
29. Translating a failed control into an action plan (real example, redacted)

## Format notes
- Every post: symptom → what you tried that didn't work → root cause → fix → prevention.
- Screenshots/log snippets sell credibility — redact hostnames, IPs, tenant IDs.
- Cross-link related posts once you have 5+ (helps SEO and time-on-site, both matter for AdSense).
