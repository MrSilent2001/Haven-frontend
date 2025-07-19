import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from 'react-native';
import theme from "../../styles/theme";

const moods = [
    { id: '1', label: 'Happy', emoji: '😊' },
    { id: '2', label: 'Sad', emoji: '😢' },
    { id: '3', label: 'Angry', emoji: '😠' },
    { id: '4', label: 'Relaxed', emoji: '😌' },
    { id: '5', label: 'Excited', emoji: '🤩' },
    { id: '6', label: 'Anxious', emoji: '😰' },
];

const screenWidth = Dimensions.get('window').width;
const moodCardSize = (screenWidth - 100) / 2;

const DailyMoodScreen = () => {
    const [selectedMood, setSelectedMood] = useState<null | (typeof moods)[0]>(null);

    const handleSelectMood = (mood: typeof moods[0]) => {
        setSelectedMood(mood);
    };

    const renderMoodOption = ({ item }: { item: typeof moods[0] }) => (
        <TouchableOpacity
            style={[
                styles.moodOption,
                selectedMood?.id === item.id && styles.selectedMood,
            ]}
            onPress={() => handleSelectMood(item)}
        >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>How is your mood today?</Text>

            <FlatList
                key={'2column'}
                data={moods}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={renderMoodOption}
                contentContainerStyle={styles.moodList}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
            />

            {selectedMood && (
                <View style={styles.card}>
                    <Text style={styles.cardText}>I'm</Text>
                    <Text style={styles.cardMood}>
                        {selectedMood.emoji} {selectedMood.label}
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F9FAFB',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: theme.colors.text,
        marginTop: 50
    },
    moodList: {
        gap: 12,
    },
    moodOption: {
        width: moodCardSize,
        height: moodCardSize,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#d7f5f0',
        elevation: 2,
    },
    selectedMood: {
        borderColor: '#4F46E5',
        backgroundColor: '#E0E7FF',
    },
    emoji: {
        fontSize: 42,
    },
    label: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    card: {
        marginTop: 30,
        padding: 20,
        backgroundColor: '#E0F7FA',
        borderRadius: 12,
        alignItems: 'center',
    },
    cardText: {
        fontSize: 20,
        marginBottom: 8,
        color: '#00796B',
    },
    cardMood: {
        fontSize: 24,
        fontWeight: '600',
        color: '#004D40',
    },
});
export default DailyMoodScreen;

