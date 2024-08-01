'use client';

import { MotionConfig } from 'framer-motion';

function UserMotionPreference({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default UserMotionPreference;
