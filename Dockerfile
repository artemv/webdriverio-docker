FROM circleci/node:10

WORKDIR /home/circleci
ADD . .
RUN sudo chown circleci:circleci -R .
RUN chmod 777 -R .

RUN yarn --frozen-lockfile

ENTRYPOINT ["tail", "-f", "/dev/null"]
