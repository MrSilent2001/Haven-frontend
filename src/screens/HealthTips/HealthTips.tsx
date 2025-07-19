import React, { useRef } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    Animated, SafeAreaView,
} from 'react-native';

const tips = [
    {
        id: '1',
        name: 'Deep Breathing',
        desc: 'Calm your nervous system with slow, controlled breaths.',
        image: {
            uri: 'https://images.unsplash.com/photo-1588776814546-4d5b6a9e6d14?auto=format&fit=crop&w=800&q=80', // Calm breathing
        },
    },
    {
        id: '2',
        name: 'Mindful Meditation',
        desc: 'Focus your mind and find stillness in the present moment.',
        image: {
            uri: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=800&q=80', // Meditation
        },
    },
    {
        id: '3',
        name: 'Progressive Relaxation',
        desc: 'Relax each muscle group slowly from head to toe.',
        image: {
            uri: 'https://images.unsplash.com/photo-1615361202103-d9959a5f77d2?auto=format&fit=crop&w=800&q=80', // Relaxed body in bed
        },
    },
    {
        id: '4',
        name: 'Journaling',
        desc: 'Write down your thoughts to unload mental clutter.',
        image: {
            uri: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80', // Writing journal
        },
    },
    {
        id: '5',
        name: 'Nature Visualization',
        desc: 'Mentally escape to a peaceful natural scene.',
        image: {
            uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // Forest walk
        },
    },
];


export const HealthTips = () => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handleStart = (pattern: string, name: string) => {
        // TODO: Navigate or start exercise
        console.log(`Started: ${name} - ${pattern}`);
    };

    const renderItem = ({ item }: { item: typeof tips[0] }) => (
        <View style={[styles.card, { backgroundColor: '#f0f7f6' }]}>
            <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
            <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDesc}>{item.desc}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Stress Relief Tips</Text>
            <FlatList
                data={tips}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e4f2f0',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#2e6e62',
        marginBottom: 16,
        textAlign: 'center',
        marginTop: 70,
    },
    card: {
        flexDirection: 'row',
        borderRadius: 16,
        padding: 12,
        marginBottom: 16,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 4 },
    },
    cardImage: {
        width: 100,
        height: 100,
        marginRight: 12,
        alignSelf: 'center',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#333',
    },
    cardDesc: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    }
});
export default HealthTips;
