'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Article extends Model {
  static get table(){
    return 'articles'
  }
  static get primaryKey(){
    return 'id'
  }
}

module.exports = Article
