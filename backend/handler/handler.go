package handler

import (
	"net/http"
	"strings"

	"github.com/abdrakhmanovzh/url_shortener/shortener"
	"github.com/abdrakhmanovzh/url_shortener/store"
	"github.com/gin-gonic/gin"
)

type UrlCreationRequest struct {
	LongUrl string `json:"long_url" binding:"required"`
	UserId  string `json:"user_id" default:"e0dba740-fc4b-4977-872c-d360239e6b10"`
}

func CreateShortUrl(c *gin.Context) {
	var creationRequest UrlCreationRequest
	if err := c.ShouldBindJSON(&creationRequest); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		println(err.Error())
		return
	}

	shortUrl := shortener.GenerateShortLink(creationRequest.LongUrl, creationRequest.UserId)
	store.SaveUrlMapping(shortUrl, creationRequest.LongUrl)
	println(shortUrl)
	c.JSON(200, shortUrl)
}

func HandleShortUrlRedirect(c *gin.Context) {
	shortUrl := c.Param("shortUrl")
	arr := strings.Split(shortUrl, ":")
	shortUrl = arr[1]

	initialUrl := store.RetrieveInitialUrl(shortUrl)
	c.JSON(200, initialUrl)
}
