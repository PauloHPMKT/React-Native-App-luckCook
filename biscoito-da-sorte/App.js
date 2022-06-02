import { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const App = () => {
  const [img, setImg] = useState(require('./src/biscoito.png'))
  const [textoFrase, setTextoFrase] = useState('')

  let frases = [
    'Siga os bons e aprenda com eles!',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distancia entre duas pessoas.',
    'Deixe de lado as preocupacoes e seja feliz!',
    'Realize o obvio, pense no improvável e consquiste o impossível!',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo!'
  ]


  function breakCook() {
    let randomNumber = Math.floor(Math.random() * frases.length)

    setTextoFrase(`"${frases[randomNumber]}"`)
    setImg(require('./src/biscoitoAberto.png'))
  }

  function restartCook() {
    setTextoFrase('')
    setImg(require('./src/biscoito.png'))
  }

  return (
    <View style={styles.container}>
      <Image 
        source={ img }
        style={styles.img}  
      />
      <Text style={styles.textoFrase}>{ textoFrase }</Text>

      <TouchableOpacity style={styles.button} onPress={ breakCook }>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, { marginTop: 15, borderColor: '#121212',}]}
        onPress={ restartCook }
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, { color: '#121212', }]}>Reiniciar biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#dd7b22', 
    textAlign: 'center',
    margin: 30,
  },
  button: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2, 
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22', 
  }
})

export default App