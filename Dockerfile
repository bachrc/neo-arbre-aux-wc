FROM node:22 AS base
ARG USERNAME=bipboup
ARG USER_UID=2442
ARG USER_GID=$USER_UID

RUN adduser $USERNAME
RUN apt-get update && apt-get install -y git

FROM base AS dev
USER ${USERNAME}
RUN mkdir -p /home/$USERNAME/.local/bin
ENV PATH=$PATH:/home/$USERNAME/.local/bin
COPY --from=adrianmusante/pocketbase --chown=bipboup:bipboup /opt/pocketbase/pocketbase /home/bipboup/.local/bin/pocketbase