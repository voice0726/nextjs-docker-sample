package main

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "OK")
	})
	e.POST("/", func(c echo.Context) error {
		fmt.Println(c)
		name := c.FormValue("name")
		fmt.Println(name)
		return c.String(http.StatusOK, name)
	})
	e.Start(":4000")
}


