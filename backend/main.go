package main

import (
	"fmt"

	"github.com/abdrakhmanovzh/url_shortener/handler"
	"github.com/abdrakhmanovzh/url_shortener/store"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.New()
	r.Use(gin.Logger())

	r.Use(cors.Default())
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Welcome to the URL Shortener with Go",
		})
	})

	r.POST("/create-short-url", func(c *gin.Context) {
		handler.CreateShortUrl(c)
	})

	r.GET("/:shortUrl", func(c *gin.Context) {
		handler.HandleShortUrlRedirect(c)
	})

	store.InitializeStore()

	err := r.Run(":9808")
	if err != nil {
		panic(fmt.Sprintf("Failed to start server - Error %v", err))
	}
}
