#!/bin/bash
# 파일 변경 감지 시 자동 커밋 & 푸시 스크립트

cd "$(dirname "$0")"

echo "🔄 자동 푸시 감시 시작..."
echo "   저장소: $(git remote get-url origin)"
echo "   브랜치: $(git branch --show-current)"
echo "   중지하려면 Ctrl+C를 누르세요."
echo ""

while true; do
    # 변경사항 확인
    if [ -n "$(git status --porcelain)" ]; then
        echo "$(date '+%Y-%m-%d %H:%M:%S') 변경 감지됨. 커밋 & 푸시 중..."
        git add -A
        git commit -m "Auto-commit: $(date '+%Y-%m-%d %H:%M:%S')"
        git push origin main
        echo "✅ 푸시 완료!"
        echo ""
    fi
    sleep 10
done
