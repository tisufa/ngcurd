export const leaveConfirmationGuard = (component: {
  onLeaveConfirmation?: () => Promise<boolean>;
}): Promise<boolean> => {
  if (component && component.onLeaveConfirmation) {
    return component.onLeaveConfirmation();
  } else {
    return new Promise((resolve) => resolve(true));
  }
};
