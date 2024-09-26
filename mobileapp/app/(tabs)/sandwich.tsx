import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View>
            <Text> This is the baba ganouj page 🧆</Text>
            <Link href="/babaganouj">Go to babaganouj Page</Link>
        </View> 
    )
}