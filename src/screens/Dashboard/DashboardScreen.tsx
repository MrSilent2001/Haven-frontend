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
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import theme from '../../styles/theme';
import { RootStackParamList } from '../../types';
import { SCREEN_NAMES } from '../../constants';

type DashboardNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CARDS = [
    { title: 'Daily Mood Check', icon: 'smile', screen: SCREEN_NAMES.HOME },
    { title: 'Health Tips', icon: 'heart', screen: SCREEN_NAMES.HOME },
    { title: 'Meditation & Exercises', icon: 'sun', screen: SCREEN_NAMES.EXERCISES },
    { title: 'Therapists & Consultants', icon: 'user-check', screen: SCREEN_NAMES.SEARCH_THERAPISTS },
    { title: 'Smart AI', icon: 'cpu', screen: SCREEN_NAMES.HOME, premium: true },
    { title: 'Crisis Support', icon: 'alert-triangle', screen: SCREEN_NAMES.HOME, premium: true },
];

const Dashboard = () => {
    const navigation = useNavigation<DashboardNavigationProp>();

    const handleCardPress = (screen: string) => {
        // Navigate based on the screen type
        if (screen === SCREEN_NAMES.EXERCISES) {
            // Switch to exercises tab
            const tabNavigation = navigation.getParent();
            tabNavigation?.navigate('ExercisesTab');
        } else if (screen === SCREEN_NAMES.SEARCH_THERAPISTS) {
            // Switch to profile tab where therapist search is located
            const tabNavigation = navigation.getParent();
            tabNavigation?.navigate('SearchTherapists', { screen: 'SearchTherapists' });
        }else if (screen === SCREEN_NAMES.HEALTH_TIPS) {
            // Switch to profile tab where therapist search is located
            const tabNavigation = navigation.getParent();
            tabNavigation?.navigate('HealthTips', { screen: 'HealthTips' });
        } else {
            // For other screens, navigate within the current stack
            navigation.navigate(screen as keyof RootStackParamList);
        }
    };

    const renderCard = ({ item }: { item: typeof CARDS[number] }) => {
        const isPremium = item.premium;

        return (
            <TouchableOpacity
                style={[styles.card, isPremium && styles.disabledCard]}
                onPress={() => !isPremium && handleCardPress(item.screen)}
                activeOpacity={isPremium ? 1 : 0.85}
            >
                <View style={styles.iconWrapper}>
                    <Feather name={item.icon as any} size={32} color={theme.colors.primary} />
                </View>
                <Text style={styles.cardText}>{item.title}</Text>

                {isPremium && (
                    <View style={styles.premiumBadge}>
                        <Text style={styles.premiumBadgeText}>Premium</Text>
                    </View>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome Stephanie 👋</Text>
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
        marginTop: 40,
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
    premiumBadge: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#FFD700',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    premiumBadgeText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#000',
    },
    disabledCard: {
        opacity: 0.5,
    },
});

export default Dashboard;
