'use strict'

const Article = use("App/Models/Article")

class ArticleController {

  async index({ response }) {
    let articles = await Article.all()
    return response.json(articles)
  }

  async show({ params, response }) {
    const articles = await Article.find(params.id)
    return response.json(articles)
  }

  async store({ request, response }) {
    const articlesData = request.only(['title', 'description'])
    const article = new Article()
    article.title = articlesData.title
    article.description = articlesData.description

    await article.save()

    return response.status(201).json(article)
  }

  async update({ params, request, response }) {
    const articlesData = request.only(['title', 'description'])
    const articles = await Article.find(params.id)

    if (!articles) {
      return response.status(404).json({ data: 'Resource not found' })
    }
    articles.title = articlesData.title
    articles.description = articlesData.description
    await articles.save()

    return response.status(200).json(articles)

  }

  async delete({ params, response }) {
    const articles = await Article.find(params.id)
    if (!articles) {
      return response.status(404).json({ data: 'Resource not found' })
    }
    await articles.delete()
    return response.status(204).json(null)
  }
}

module.exports = ArticleController
