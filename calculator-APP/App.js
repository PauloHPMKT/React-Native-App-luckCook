import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './style'

const App = () => {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  const handleSubmit = () => {
    const alt = altura / 100 // dividir por 100 para trabalhar as casas decimais
    const imc = peso / (alt * alt)
    setPeso('')
    setAltura('')

    if(imc < 18.6) {
      alert(`Seu IMC é: ${imc.toFixed(2)}. Você está abaixo do peso!`)
    } else if(imc >= 18.6 && imc <24.9) {
      alert(`Seu IMC é: ${imc.toFixed(2)}. Você está com o peso ideal!`)
    } else if(imc >= 24.9 && imc < 34.9) {
      alert(`Seu IMC é: ${imc.toFixed(2)}. Você está acima do peso!`)
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora IMC</Text>
      <TextInput 
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)} /* cada vez que digita algo ele salva em uma variavel*/
        placeholder="Peso (Kg)"
        keyboardType="numeric"
      />
      <TextInput 
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="Altura (cm)"   
        keyboardType="numeric"
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App