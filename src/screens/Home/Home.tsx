import { useMemo } from 'react';
import { Alert, Image, Linking, ScrollView, Switch, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Logo from '../../components/Logo/Logo';
import ActionButton from '../../components/ActionButton/ActionButton';
import SocialButton from '../../components/SocialButton/SocialButton';
import Footer from '../../components/Footer/Footer';
import { useTheme } from '../../ThemeContext';
import { RootStackParamList } from '../../types/navigation';
import { getStyles } from './HomeStyles';

const socialLinks = [
  { title: 'GitHub', icon: 'github', url: 'https://github.com/viniciusEB/atividade-bimestral1' },
  { title: 'Linkedin', icon: 'linkedin-in', url: 'https://www.linkedin.com' },
  { title: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com' },
  { title: 'Twitch', icon: 'twitch', url: 'https://www.twitch.tv' },
] as const;

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {
  const { colors, isLight, toggleTheme } = useTheme();
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

          <Text style={styles.title}>
            Eleve seu negócio digital a outro nível{' '}
            <Text style={styles.titleHighlight}>
              com um Front-end de qualidade!
            </Text>
          </Text>

          <Text style={styles.description}>
            Olá! Sou o Matheus, desenvolvedor Front-end com especialidade
            em React, HTML e CSS. Ajudo pequenos negócios e designers a
            colocarem em prática boas ideias. Vamos conversar?
          </Text>

          <View style={styles.buttons}>
            <ActionButton
              title="Sobre mim"
              onPress={() => navigation.navigate('Sobre')}
            />
            <View style={styles.spacer} />
            <ActionButton
              title="Entre em contato!"
              onPress={() => Alert.alert('Entre em contato')}
            />
          </View>

          <Text style={styles.sectionTitle}>Acesse minhas redes:</Text>

          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Alterar visualização</Text>
            <Switch
              value={isLight}
              onValueChange={toggleTheme}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor="#FFFFFF"
            />
          </View>

          {socialLinks.map((item) => (
            <SocialButton
              key={item.title}
              title={item.title}
              icon={item.icon}
              onPress={() => Linking.openURL(item.url)}
            />
          ))}
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}