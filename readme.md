# Offical Development Documentation for Scooterscan

For any questions, feel free to email or contact via Github:
<Erik.hakansson96@gmail.com>

## Content
<b><ol>
	<li> Purpose and Project Goal </li>
	<li> Tech Stack, motivations, and helpful resources</li>
	<li> Structure and Architecture </li>
	<li> Deployment </li>
	<li> Developer Environment Setup </li>
	<li> Workflow & How to contribute </li>
	<li> Helpful Resources and Learning Aides </li>
</ol></b>


## 1. Purpose and Project Goal

Simply, the project tries to provide a service that tracks market pressence of scooter companies in they cities in which the operate. Besides providing a full map-overview of where scooters are located (and what company provided them), additonal statistics and analysis will be dynamically generated; all for the purpose of answering the question:

> What is X (scooter company) status in Y (city)?

This information will be useful to both private and public actors, essentially allowing traking of changes of the scooter market: at a local level all the way to the multi-national level.

Besides a GUI to detail a full breakdown of a city, the underlying API will have publically exposed endpoints, allowing others to build auxiliary services ontop of the exsiting project.

Collaborators

* Erik Hakansson (M.A., Economics, University of Aberdeen)
* Simon Jakobsson (MSc, Software Engineering, Lindköping University)

## 2. Tech Stack, motivations, and helpful resources

#### Core Technologies

The core underlying stack of the app is the MERN-stack (MongoDB, Express, React, NodeJS).

The project also utilises containerization via Docker, as well as deployment of container onto a Kubernetes cluster via GCP (GCP Kubernetes engine).


## 3. Structure and Architecture

#####Frontend
React

#####Serverside
NodeJS with Express acting as the API routing layer

#####DB
MongoDB deployed on GCP (as a container on the same Kubernetes cluster).

#####Auixillary Services (data mining jobs etc.)
Self-contained backend jobs written in NodeJS, deployed natively on the kluser via K-native (serverless functions basically).



## 4. Deployment

containers => kubernetes kluster

## 5. Developer Environment Setup

## 6. Workflow & how to Contribute

## 7. Helpful Resources & Learning Aides

Devops Stuff:

<b>Containers</b>
<br><https://www.youtube.com/watch?v=EnJ7qX9fkcU>

<b>Docker</b>
<br><https://www.youtube.com/watch?v=YFl2mCHdv24>

<b>Kubernetes</b>
<br><https://www.youtube.com/watch?v=kOa_llowQ1c>
