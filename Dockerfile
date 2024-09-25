FROM alpine:3 AS base

USER root
RUN addgroup -S bipboup && adduser -S bipboup -G bipboup
RUN apk fix && \
    apk --no-cache --update add git bash
USER bipboup
RUN mkdir -p /home/bipboup/.local/node
ADD --chown=bipboup:bipboup https://unofficial-builds.nodejs.org/download/release/v22.9.0/node-v22.9.0-linux-x64-musl.tar.xz /tmp/node.tar.xz
RUN tar -xf /tmp/node.tar.xz -C /home/bipboup/.local/node --strip-components=1
ENV PATH=$PATH:/home/bipboup/.local/node/bin

FROM base AS dev
USER bipboup
ENV SHELL /bin/bash
RUN mkdir -p /home/bipboup/.local/bin
ENV PATH=$PATH:/home/bipboup/.local/bin
COPY --from=adrianmusante/pocketbase --chown=bipboup:bipboup /opt/pocketbase/pocketbase /home/bipboup/.local/bin/pocketbase