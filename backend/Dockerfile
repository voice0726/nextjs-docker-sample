FROM golang:1.15 as builder
WORKDIR /src
COPY go.mod go.sum ./
RUN go mod download

COPY . .

ENV CGO_ENABLED=0
ENV GOOS=linux
ENV GOARCH=amd64
RUN go build -o app main.go

FROM alpine:latest
COPY --from=builder /src/app /app
EXPOSE 4000
ENTRYPOINT ["/app"]
