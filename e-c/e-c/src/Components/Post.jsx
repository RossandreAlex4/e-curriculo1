import Comments from './Comments';
import style from './post.module.css'

export default function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img src="https://w7.pngwing.com/pngs/592/884/png-transparent-programmer-computer-programming-computer-software-computer-icons-programming-language-avatar.png" alt="" />
          <div className={style.authorInfo}>
            <strong>Nome do profissional</strong>
            <span>Cargo / Função</span>
          </div>
        </div>
      </header>
      <div className={style.content}>
        <p>Sobre você</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum voluptatum rerum aspernatur laborum eos delectus iure doloremque impedit nam omnis quod deleniti vero voluptatibus qui, ipsa, repudiandae reiciendis, beatae quas!</p>

        <p><a href=''>Link repositórios</a></p>
        <p><a>Último projeto</a></p>
      </div>

      <form action="">
        <strong>Experiência profissional</strong>
      </form>
      <div>
        <Comments/>
      </div>
    </article>
  )
}