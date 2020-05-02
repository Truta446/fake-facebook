import React, { Component } from 'react';

import PostItem from '../PostItem';
import Mozart from '../../assets/mozart.jpg';
import Mark from '../../assets/mark.jpg';
import Self from '../../assets/self.png';

import './style.css'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Júlio Alcantara",
          avatar: Mark
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: Mozart
            },
            content: `A Rocketseat está sempre em busca de novos membros para o time,
              e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80%
              do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você
              tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord!
              (sério, me chamem mesmo, esse comentário é real).`
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: Mark
        },
        date: "05 Jun 2019",
        content: "Fala galera, beleza?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: Mozart
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: Mozart
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Juan Versolato Lopes",
          avatar: Self
        },
        date: "01 Mai 2020",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: Mozart
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: Mozart
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 3,
            author: {
              name: "Diego Fernandes",
              avatar: Mozart
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;