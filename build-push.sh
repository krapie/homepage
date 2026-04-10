#!/bin/bash
set -e

REGISTRY="${REGISTRY:-krapi0314}"
IMAGE_NAME="homepage"
TAG="${TAG:-latest}"
FULL_IMAGE="$REGISTRY/$IMAGE_NAME:$TAG"

echo "Building $FULL_IMAGE..."
docker build -t "$FULL_IMAGE" "$(dirname "$0")"

echo "Pushing $FULL_IMAGE..."
docker push "$FULL_IMAGE"

echo "Done: $FULL_IMAGE"
