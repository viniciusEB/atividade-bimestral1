import { useMemo } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Logo from '../../components/Logo/Logo';
import ActionButton from '../../components/ActionButton/ActionButton';
import Footer from '../../components/Footer/Footer';
import { useTheme } from '../../ThemeContext';
import { RootStackParamList } from '../../types/navigation';
import { getStyles } from './SobreStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'Sobre'>;

export default function Sobre({ navigation }: Props) {
  const { colors } = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  return (

    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Logo />

          <View style={styles.imageFrame}>
            <Image
              style={styles.profileImage}
              source={{ uri: 'https://i.pravatar.cc/600?img=12' }}
            />

          </View>

          <Text style={styles.title}>Sobre mim</Text>

          <Text style={styles.paragraph}>
            Sou o Matheus, desenvolvedor Front-end apaixonado por transformar
            ideias em interfaces funcionais, acessíveis e bem pensadas.
            Trabalho principalmente com React, HTML e CSS, criando experiências
            digitais que não só funcionam bem, mas também fazem sentido para
            quem usa.
          </Text>

          <Text style={styles.paragraph}>
            Gosto de colaborar de perto com pequenos negócios, designers e
            times criativos, ajudando a tirar projetos do papel e levá-los para
            a web de forma prática e eficiente. Acredito que um bom produto
            nasce do equilíbrio entre código bem escrito, atenção aos detalhes
            e uma comunicação clara ao longo de todo o processo.
          </Text>

          <Text style={styles.paragraph}>
            Estou sempre buscando evoluir, aprender novas tecnologias e
            aprimorar minhas soluções, seja otimizando performance, melhorando
            a usabilidade ou explorando novas formas de construir interfaces
            mais escaláveis. Se você tem uma ideia e quer transformá-la em algo
            real, vamos conversar!
          </Text>

          <ActionButton title="Voltar" onPress={() => navigation.popToTop()} />
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}