# homepage

Personal homepage at [kevinprk.com](https://kevinprk.com). A minimal link-in-bio page with animated cards linking to GitHub and LinkedIn.

## Stack

- **React 19** + **TypeScript**
- **Vite** — build tooling
- **Tailwind CSS v4** — styling
- **Framer Motion** — entrance animations
- **Lucide React** — icons

## Local Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build   # outputs to dist/
```

The `build-push.sh` script builds the Docker image and pushes it to the registry for deployment.

## Deployment

Deployed to Kubernetes via ArgoCD. The `k8s/homepage/` directory in the root of the repo contains the Deployment, Service, and HTTPRoute manifests. ArgoCD syncs from the `main` branch automatically.
