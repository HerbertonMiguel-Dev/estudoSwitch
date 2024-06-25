// Importa bibliotecas e componentes necessários do React, React Native e React Native Switch
import React, { useState } from "react"; // Importa React e o hook useState para gerenciamento de estado
import { View, StyleSheet, Text, Switch } from "react-native"; // Importa componentes de layout e estilização do React Native

// Componente principal da aplicação
export default function App() {
  // Declara um estado chamado status, com valor inicial de false
  const [status, setStatus] = useState(false);

  // Retorna o layout da aplicação
  return (
    // Contêiner principal
    <View style={styles.container}> 
      
      {/* Componente Switch para alternar entre dois estados */}
      <Switch
        value={status} // Define o valor atual do Switch baseado no estado status
        onValueChange={(valorSelecionado) => setStatus(valorSelecionado)} // Atualiza o estado status quando o Switch é alterado
        trackColor={{ false: '#121212', true: '#00ff00' }} // Define as cores da faixa do Switch para os estados false e true
        thumbColor={status ? '#121212' : '#f4f4f4'} // Define a cor da bolinha do Switch baseado no estado status
      />

      {/* Exibe o status atual (ATIVO/INATIVO) */}
      <Text style={{ textAlign: 'center', fontSize: 25 }}>
        Status: {status ? 'ATIVO' : 'INATIVO'}
      </Text>
      
    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    marginTop: 35 // Adiciona margem no topo
  },
});
