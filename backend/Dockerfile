FROM golang:1.16 as builder
WORKDIR /src
COPY go.mod go.sum ./
RUN go mod download

COPY . ./

ENV CGO_ENABLED=0
ENV GOOS=linux
ENV GOARCH=amd64
RUN go build -o app main.go

FROM alpine
RUN apk add --no-cache ca-certificates

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=0 /src/app .
CMD ["./app"]
