import { StyleSheet } from 'react-native';

const colors = {
  bg: '#f7f8fb',
  white: '#fff',
  primary: '#6366f1',
  success: '#10b981',
  accent: '#4f46e5',
  muted: '#64748b',
  text: '#0f172a',
  cardShadow: '#000',
};

export default StyleSheet.create({
  /* Layout / containers */
  safe: { flex: 1, backgroundColor: colors.bg },
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: colors.bg },

  /* Header / branding */
  header: { marginBottom: 24, alignItems: 'center' },
  logo: { fontSize: 28, fontWeight: '800', color: colors.text },
  tag: { marginTop: 6, color: colors.muted },

  /* Card / forms */
  form: {
    backgroundColor: colors.white,
    padding: 18,
    borderRadius: 12,
    elevation: 2,
    shadowColor: colors.cardShadow,
    shadowOpacity: 0.03,
    shadowRadius: 6,
  },
  input: {
    height: 48,
    borderColor: '#e6eef8',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: '#fcfeff',
  },

  /* Primary buttons */
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 6,
  },
  primaryText: { color: colors.white, fontWeight: '700' },

  /* Footer / links */
  footerRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 12 },
  footerText: { color: colors.muted },
  link: { color: colors.primary, fontWeight: '700' },

  /* Home specific */
  headerHome: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appName: { fontSize: 20, fontWeight: '700', color: colors.text },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#e2e8f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: { color: colors.text, fontWeight: '700' },

  card: {
    margin: 16,
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 12,
    elevation: 3,
    shadowColor: colors.cardShadow,
    shadowOpacity: 0.03,
    shadowRadius: 6,
  },
  title: { fontSize: 22, fontWeight: '700', color: colors.text },
  subtitle: { marginTop: 8, color: '#475569' },

  row: { flexDirection: 'row', marginTop: 16, justifyContent: 'space-between' },
  actionButton: {
    flex: 1,
    marginRight: 8,
    paddingVertical: 12,
    backgroundColor: '#eef2ff',
    borderRadius: 10,
    alignItems: 'center',
  },
  actionText: { color: '#4f46e5', fontWeight: '600' },

  primaryButtonAlt: {
    backgroundColor: colors.accent,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  primaryTextAlt: { color: colors.white, fontWeight: '700' },

  /* Register variations */
  primaryButtonSuccess: {
    backgroundColor: colors.success,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 6,
  },
  linkSuccess: { color: colors.success, fontWeight: '700' },
});