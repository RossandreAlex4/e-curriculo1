import styles from './comments.module.css'
import React from 'react';
import { Flex, Radio, Input, Button, ConfigProvider } from 'antd';


export default function Comments() {
  return (
    <>
    
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00875f',
                    borderRadius: 100,
                    colorBgContainer: '#8d8d99',
                    colorBorder:'#000000',
                    
                },
            }}
        >

    <div className={styles.comments}>
        <img src="src\assets\img\nivel.png" alt="" />
        <div>
            <div className={styles.commentsContent}>
                <header>
                    <div>
                        <strong>Experiência</strong>
                    </div>
                </header>
                <Input className={styles.commentsInput} size="large" placeholder="Insira suas informações"  />
            </div>
        </div>
    </div>
    
    <div className={styles.comments}>
        <img src="src\assets\img\diploma.png" alt="" />
        <div>
            <div className={styles.commentsContent}>
                <header>
                    <div>
                        <strong>Formação</strong>
                    </div>
                </header>
                <Input className={styles.commentsInput} size="large" placeholder="Insira suas informações"  />
            </div>
        </div>
    </div>

    <div className={styles.comments}>
        <img src="src\assets\img\trabalhador.png" alt="" />
        <div>
            <div className={styles.commentsContent}>
                <header>
                    <div>
                        <strong>Estágios</strong>
                    </div>
                </header>
                <Input className={styles.commentsInput} size="large" placeholder="Insira suas informações"  />
            </div>
        </div>
    </div>

    <div className={styles.comments}>
        <img src="src\assets\img\aprendizagem-de-idiomas.png" alt="" />
        <div>
            <div className={styles.commentsContent}>
                <header>
                    <div>
                        <strong>Idiomas</strong>
                    </div>
                </header>
                <Input className={styles.commentsInput} size="large" placeholder="Insira suas informações"  />
            </div>
        </div>
    </div>

    <div className={styles.comments}>
        <img src="src\assets\img\programacao.png" alt="" />
        <div>
            <div className={styles.commentsContent}>
                <header>
                    <div>
                        <strong>Área favorita na programação</strong>
                    </div>
                </header>
                <Input className={styles.commentsInput} size="large" placeholder="Insira suas informações"  />
            </div>
        </div>
    </div>

    <div className={styles.comments}>
        <img src="src\assets\img\habilidades.png" alt="" />
        <div>
            <div className={styles.commentsContent}>
                <header>
                    <div>
                        <strong>Principais habilidades</strong>
                    </div>
                </header>
                <Input className={styles.commentsInput} size="large" placeholder="Insira suas informações"  />
            </div>
        </div>
    </div>

    <div className={styles.comments}>
        <img src="src\assets\img\info.png" alt="" />
        <div>
            <div className={styles.commentsContent}>
                <header>
                    <div>
                        <strong>Informacões adicionais</strong>
                    </div>
                </header>
                <Input className={styles.commentsInput} size="large" placeholder="Insira suas informações"  />   
            </div>
        </div>
    </div>
    
    

    <div className={styles.commentsRadio}>
        <img src="src\assets\img\pessoas.png" alt="" />
        <strong>Sua nota de 0 a 10 nas seguintes habilidades interpessoais</strong>
        <p>1. Trabalho em equipe</p>
        <form>
        <Flex vertical gap="middle">
            <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">0</Radio.Button>
            <Radio.Button value="b">1</Radio.Button>
            <Radio.Button value="c">2</Radio.Button>
            <Radio.Button value="d">3</Radio.Button>
            <Radio.Button value="e">4</Radio.Button>
            <Radio.Button value="f">5</Radio.Button>
            <Radio.Button value="g">6</Radio.Button>
            <Radio.Button value="h">7</Radio.Button>
            <Radio.Button value="i">8</Radio.Button>
            <Radio.Button value="j">9</Radio.Button>
            <Radio.Button value="k">10</Radio.Button>
            </Radio.Group>
        </Flex>
        </form>
    </div>

    <div className={styles.commentsRadio}>
        <p>2. Adaptabilidade</p>
        <form>
        <Flex vertical gap="middle">
            <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">0</Radio.Button>
            <Radio.Button value="b">1</Radio.Button>
            <Radio.Button value="c">2</Radio.Button>
            <Radio.Button value="d">3</Radio.Button>
            <Radio.Button value="e">4</Radio.Button>
            <Radio.Button value="f">5</Radio.Button>
            <Radio.Button value="g">6</Radio.Button>
            <Radio.Button value="h">7</Radio.Button>
            <Radio.Button value="i">8</Radio.Button>
            <Radio.Button value="j">9</Radio.Button>
            <Radio.Button value="k">10</Radio.Button>
            </Radio.Group>
        </Flex>
        </form>
    </div>

    <div className={styles.commentsRadio}>
        <p>3. Organização</p>
        <form>
        <Flex vertical gap="middle">
            <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">0</Radio.Button>
            <Radio.Button value="b">1</Radio.Button>
            <Radio.Button value="c">2</Radio.Button>
            <Radio.Button value="d">3</Radio.Button>
            <Radio.Button value="e">4</Radio.Button>
            <Radio.Button value="f">5</Radio.Button>
            <Radio.Button value="g">6</Radio.Button>
            <Radio.Button value="h">7</Radio.Button>
            <Radio.Button value="i">8</Radio.Button>
            <Radio.Button value="j">9</Radio.Button>
            <Radio.Button value="k">10</Radio.Button>
            </Radio.Group>
        </Flex>
        </form>
    </div>

    <div className={styles.commentsRadio}>
        <p>4. Gerenciamento de tempo</p>
        <form>
        <Flex vertical gap="middle">
            <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">0</Radio.Button>
            <Radio.Button value="b">1</Radio.Button>
            <Radio.Button value="c">2</Radio.Button>
            <Radio.Button value="d">3</Radio.Button>
            <Radio.Button value="e">4</Radio.Button>
            <Radio.Button value="f">5</Radio.Button>
            <Radio.Button value="g">6</Radio.Button>
            <Radio.Button value="h">7</Radio.Button>
            <Radio.Button value="i">8</Radio.Button>
            <Radio.Button value="j">9</Radio.Button>
            <Radio.Button value="k">10</Radio.Button>
            </Radio.Group>
        </Flex>
        </form>
    </div>

    <div className={styles.commentsRadio}>
        <p>5. Comunicação</p>
        <form>
        <Flex vertical gap="middle">
            <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">0</Radio.Button>
            <Radio.Button value="b">1</Radio.Button>
            <Radio.Button value="c">2</Radio.Button>
            <Radio.Button value="d">3</Radio.Button>
            <Radio.Button value="e">4</Radio.Button>
            <Radio.Button value="f">5</Radio.Button>
            <Radio.Button value="g">6</Radio.Button>
            <Radio.Button value="h">7</Radio.Button>
            <Radio.Button value="i">8</Radio.Button>
            <Radio.Button value="j">9</Radio.Button>
            <Radio.Button value="k">10</Radio.Button>
            </Radio.Group>
        </Flex>
        </form>
    </div>

    <div className={styles.commentsRadio}>
        <p>6. Resolução de problemas</p>
        <form>
        <Flex vertical gap="middle">
            <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">0</Radio.Button>
            <Radio.Button value="b">1</Radio.Button>
            <Radio.Button value="c">2</Radio.Button>
            <Radio.Button value="d">3</Radio.Button>
            <Radio.Button value="e">4</Radio.Button>
            <Radio.Button value="f">5</Radio.Button>
            <Radio.Button value="g">6</Radio.Button>
            <Radio.Button value="h">7</Radio.Button>
            <Radio.Button value="i">8</Radio.Button>
            <Radio.Button value="j">9</Radio.Button>
            <Radio.Button value="k">10</Radio.Button>
            </Radio.Group>
        </Flex>
        </form>
    </div>

    <div className={styles.commentsRadio}>
        <p>7. Criatividade</p>
        <form>
        <Flex vertical gap="middle">
            <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">0</Radio.Button>
            <Radio.Button value="b">1</Radio.Button>
            <Radio.Button value="c">2</Radio.Button>
            <Radio.Button value="d">3</Radio.Button>
            <Radio.Button value="e">4</Radio.Button>
            <Radio.Button value="f">5</Radio.Button>
            <Radio.Button value="g">6</Radio.Button>
            <Radio.Button value="h">7</Radio.Button>
            <Radio.Button value="i">8</Radio.Button>
            <Radio.Button value="j">9</Radio.Button>
            <Radio.Button value="k">10</Radio.Button>
            </Radio.Group>
        </Flex>
        </form>

        
    </div>
            
        <Button id='button' type="primary">Enviar</Button>
      
    
        </ConfigProvider>

    </>
       
  )
}