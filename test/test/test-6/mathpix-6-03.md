E X A M P L E (1) Refer to the lawn-care problem described at the beginning of the lesson.
a. Use the row-reduction method to solve the system.
A P P LICATIO N
SMALL BUSINESS
b. Find the hourly wages for Maya, Amit, and Nina. Then find the total amount that each partner earns for this job.
SOLUTION
a. Perform row operations.
- Inspect column 1.
The first row begins with 1 , but the 2 in the second row needs to become 0 .
- Inspect column 2.
Row 1 :
Row 2:
Row 3:
Change the entry to 0 . Change the entry to 1 . Change the entry to 0 .
$$
\begin{array}{c}
R_{2}+R_{1} \rightarrow R_{1} \\
{\left[\begin{array}{rrrlr}
1 & 0 & -1 & \vdots & 2 \\
0 & -1 & -2 & \vdots & -19 \\
0 & 1 & 3 & \vdots & 25
\end{array}\right]\left[\begin{array}{rrrcr}
1 & 0 & -1 & \vdots & 2 \\
0 & 1 & 2 & \vdots & 19 \\
0 & 1 & 3 & \vdots & 25
\end{array}\right]\left[\begin{array}{rcccr}
1 & 0 & -1 & \vdots & 2 \\
0 & 1 & 2 & \vdots & 19 \\
0 & 0 & 1 & \vdots & 6
\end{array}\right]}
\end{array}
$$
- Inspect column 3 .
Row 1:
Row 2:
Change the entry to 0 . $\quad$ Change the entry to 0 .
$$
\begin{array}{cc}
R_{3}+R_{1} \rightarrow R_{1} & -2 R_{3}+R_{2} \rightarrow R_{2} \\
{\left[\begin{array}{rrrrr}
1 & 0 & 0 & \vdots & 8 \\
0 & 1 & 2 & \vdots & 19 \\
0 & 0 & 1 & \vdots & 6
\end{array}\right] \quad\left[\begin{array}{lllll}
1 & 0 & 0 & \vdots & 8 \\
0 & 1 & (0) & \vdots & 7 \\
0 & 0 & 1 & \vdots & 6
\end{array}\right]}
\end{array}
$$
The matrix is now in reduced row-echelon form.
$$
\left[\begin{array}{ccccc}
1 & 0 & 0 & \vdots & 8 \\
0 & 1 & 0 & \vdots & 7 \\
0 & 0 & 1 & \vdots & 6
\end{array}\right] \begin{array}{l}
m=8 \\
a=7 \\
n=6
\end{array}
$$
b. Maya receives $\$ 8$ an hour; since she works 3 hours, she will earn $\$ 24$. Amit receives $\$ 7$ an hour and works 3 hours, so he will earn $\$ 21$. Nina receives $\$ 6$ an hour and works 4 hours, so she will earn $\$ 24$.
CHECKPOINT $\checkmark$ Check the solution to Example 1 by using substitution.
LESSON 4.5 USING MATRIX ROW OPERATIONS
253