import style from './sidebar.module.css';

export default function Sidebar() {
  return( 
      <aside className={style.sidebar}>
        <img className={style.cover} src="https://blogdaengenharia.com/wp-content/uploads/2021/07/Design-sem-nome-4.png" alt="" />
        <div className={style.profile}>
          <img className={style.avatar} src="https://w7.pngwing.com/pngs/592/884/png-transparent-programmer-computer-programming-computer-software-computer-icons-programming-language-avatar.png" alt="" />
          <strong>Seu nome</strong>
          <span>Cargo pretendido</span>
          <p>Telefone: (47) 11418-1223</p>
          <p>E-mail: profissional@gmail.com</p>
        </div>
        <footer>
          <a href="">Seu Github</a>
        </footer>
      </aside>
  )
}