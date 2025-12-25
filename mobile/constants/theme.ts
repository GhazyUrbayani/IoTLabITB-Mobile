/**
 * Theme colors matching the web app design system
 * Primary: Green (#22c55e - green-500) - Matches Tailwind green-500
 * Secondary: Yellow (#eab308 - yellow-500) - Matches Tailwind yellow-500
 * 
 * Web App Gradient Reference:
 * Light: linear-gradient(135deg, #a9caac 25%, #74b787 75%)
 * Dark: linear-gradient(135deg, #060040 15%, #1d0039 85%)
 */

import { Platform } from 'react-native';

// Primary green color matching web app (Tailwind green-500)
const primaryGreen = '#22c55e';
const primaryGreenDark = '#16a34a';

// Gradient colors from web CSS
export const GradientColors = {
  light: ['#a9caac', '#74b787'] as const, // 135deg gradient
  dark: ['#060040', '#1d0039'] as const,   // 135deg gradient
};

export const Colors = {
  light: {
    // Text colors (matching web foreground/muted-foreground)
    text: '#1a1a1a',           // text-foreground
    textMuted: '#6b7280',      // text-muted-foreground (gray-500)
    
    // Background colors
    background: '#ffffff',      // bg-background
    backgroundSecondary: '#f9fafb', // bg-secondary/30 equivalent (gray-50)
    
    // Gradient colors for background
    gradientStart: '#a9caac',
    gradientEnd: '#74b787',
    
    // Primary colors (green - matching web buttons)
    tint: primaryGreen,
    primary: primaryGreen,
    primaryDark: primaryGreenDark,
    
    // Secondary colors
    secondary: '#eab308',       // yellow-500
    accent: primaryGreen,
    
    // UI element colors
    icon: '#6b7280',            // gray-500
    tabIconDefault: '#6b7280',  // gray-500
    tabIconSelected: primaryGreen,
    
    // Border & Card colors
    border: '#e5e7eb',          // border-border (gray-200)
    card: '#ffffff',            // bg-card
    cardForeground: '#1a1a1a',  // text-card-foreground
    
    // Status colors
    success: '#22c55e',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  },
  dark: {
    // Text colors
    text: '#f9fafb',            // text-foreground (gray-50)
    textMuted: '#9ca3af',       // text-muted-foreground (gray-400)
    
    // Background colors
    background: '#0a0a0a',      // bg-background dark
    backgroundSecondary: '#111827', // bg-secondary dark (gray-900)
    
    // Gradient colors for background
    gradientStart: '#060040',
    gradientEnd: '#1d0039',
    
    // Primary colors
    tint: '#ffffff',
    primary: primaryGreen,
    primaryDark: primaryGreenDark,
    
    // Secondary colors
    secondary: '#eab308',
    accent: primaryGreen,
    
    // UI element colors
    icon: '#9ca3af',            // gray-400
    tabIconDefault: '#9ca3af',
    tabIconSelected: primaryGreen,
    
    // Border & Card colors
    border: '#374151',          // gray-700
    card: '#1f2937',            // gray-800
    cardForeground: '#f9fafb',
    
    // Status colors
    success: '#22c55e',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
