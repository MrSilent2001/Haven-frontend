import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import theme from '../../styles/theme';

const CARDS = [
    { title: 'Daily Mood Check', icon: 'smile', screen: 'MoodCheck' },
    { title: 'Health Tips', icon: 'heart', screen: 'HealthTips' },
    { title: 'Meditation & Exercises', icon: 'sun', screen: 'Meditation' },
    { title: 'Therapists & Consultants', icon: 'user-check', screen: 'Therapists' },
    { title: 'Smart AI', icon: 'cpu', screen: 'SmartAI' },
    { title: 'Crisis Support', icon: 'alert-triangle', screen: 'CrisisSupport' },
];

const Dashboard = () => {
    const navigation = useNavigation();

    const handleCardPress = (screen: string) => {
        navigation.navigate(screen as never);
    };

    const renderCard = ({ item }: { item: typeof CARDS[number] }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => handleCardPress(item.screen)}
            activeOpacity={0.85}
        >
            <View style={styles.iconWrapper}>
                <Feather name={item.icon as any} size={32} color={theme.colors.primary} />
            </View>
            <Text style={styles.cardText}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome Back 👋</Text>
            <Text style={styles.subtitle}>How can we help you today?</Text>
            <FlatList
                data={CARDS}
                renderItem={renderCard}
                keyExtractor={(item) => item.title}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.cardsWrapper}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const CARD_WIDTH = '47%';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: theme.colors.text,
        marginBottom: 6,
        textAlign: 'left',
    },
    subtitle: {
        fontSize: 16,
        color: theme.colors.secondary_text,
        marginBottom: 24,
        textAlign: 'left',
    },
    cardsWrapper: {
        paddingBottom: 24,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    card: {
        width: CARD_WIDTH,
        aspectRatio: 1,
        backgroundColor: theme.colors.card_background,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
    },
    iconWrapper: {
        backgroundColor: theme.colors.background_light,
        padding: 14,
        borderRadius: 50,
        marginBottom: 12,
    },
    cardText: {
        fontSize: 15,
        fontWeight: '600',
        color: theme.colors.text,
        textAlign: 'center',
    },
});

export default Dashboard;
